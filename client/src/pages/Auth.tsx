import { FC, useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AllRoutes } from "../consts/consts";
import { login, registration } from "../http/userAPI";
import { Context } from "../main";
import { IUserInfo } from "../types/user";
import { getErrorType } from "../utils/getErrorType";
import axios from "axios";
import { observer } from "mobx-react-lite";

const Auth: FC = observer(() => {

    const { user } = useContext(Context)
    const navigate = useNavigate()

    const location = useLocation()
    const isLogin = location.pathname === AllRoutes.LOGIN_ROUTE

    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')

    const click = async () => {
        try {
            let data: IUserInfo
            if (isLogin) {
                data = await login(emailValue, passwordValue)
            } else {
                data = await registration(emailValue, passwordValue)
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate(AllRoutes.SHOP_ROUTE)
        } catch (e) {
            if (axios.isAxiosError(e)){
                alert(e.response?.data.message)
            } else {
                alert(getErrorType(e))
            }
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="w-600 p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form>
                    <Form.Control
                        value={emailValue}
                        onChange={(e) => setEmailValue(e.target.value)}
                        className="mt-3"
                        placeholder="Введите ваш email..."
                    />
                    <Form.Control
                        value={passwordValue}
                        onChange={(e) => setPasswordValue(e.target.value)}
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        type="password"
                    />
                    <div className="d-flex justify-content-between mt-3">
                        {isLogin
                            ?
                            <div>
                                Нет аккаунта? <Link to={AllRoutes.REGISTRATION_ROUTE}>Зарегистрируйся!</Link>
                            </div>
                            :
                            <div>
                                Есть аккаунта? <Link to={AllRoutes.LOGIN_ROUTE}>Войдите!</Link>
                            </div>
                        }
                        <Button variant={"outline-success"} onClick={click}>
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    )
})

export default Auth