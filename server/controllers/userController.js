const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const ApiError = require('../error/ApiError')
const { User, Basket } = require('../models/exports')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        { id, email, role },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    )
}

class UserController {
    async registration(req, res, next) {
        try {
            const { email, password, role } = req.body
            if (!email || !password) {
                return next(ApiError.badRequest('Некорректный email или пароль'))
            }
            const candidate = await User.findOne({ where: { email } })
            if (candidate) {
                return next(ApiError.badRequest('Пользователь с таким email уже существует'))
            }
            const hashSalt = await bcrypt.genSalt(7)
            const hashedPass = await bcrypt.hash(password, hashSalt)

            const newUser = await User.create({ email, role, password: hashedPass })
            const basketForUser = await Basket.create({ userId: newUser.id })

            const token = generateJwt(newUser.id, email, newUser.role)

            return res.json({
                user: newUser,
                basket: basketForUser,
                token
            })
        } catch (err) {
            return next(ApiError.badRequest(err.message))
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body
            if (!email || !password) {
                return next(ApiError.badRequest('Некорректный email или пароль'))
            }
            const user = await User.findOne({ where: { email } })
            if (!user) {
                return next(ApiError.internal('Пользователь не найден'))
            }
            const comparePassword = await bcrypt.compare(password, user.password)
            if (!comparePassword) {
                return next(ApiError.internal('Неверный пароль'))
            }
            const token = generateJwt(user.id, user.email, user.role)
            return res.json({
                user,
                token
            })
        } catch (err) {
            return next(ApiError.badRequest(err.message))
        }
    }

    async checkAuth(req, res, next) {
        try {
            const token = generateJwt(req.user.id, req.user.email, req.user.role)
            return res.json({token})
        } catch (err) {
            return next(ApiError.badRequest(err.message))
        }
    }
}

module.exports = new UserController()