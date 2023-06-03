const ApiError = require('../error/ApiError')

class UserController {
    async registration(req, res) {
        try {

        } catch (err) {
            return res.status(500).json({message: `Some registration Error ${err}`})
        }
    }

    async login(req, res) {
        try {

        } catch (err) {
            return res.status(500).json({message: `Some login Error ${err}`})
        }
    }

    async checkAuth(req, res, next) {
        try {
            const {id} = req.query
            if (!id){
                return next(ApiError.badRequest('Не задан Id'))
            }
            res.json(id)
        } catch (err) {
            return res.status(500).json({message: `Some checkAuth Error ${err}`})
        }
    }
}

module.exports = new UserController()