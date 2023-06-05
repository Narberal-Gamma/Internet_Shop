import { FC } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link, useLocation } from "react-router-dom";
import { AllRoutes } from "../consts/consts";

const Auth: FC = () => {

    const location = useLocation()
    const isLogin = location.pathname === AllRoutes.LOGIN_ROUTE

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="w-600 p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
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
                        <Button variant={"outline-success"}>
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    )
}

export default Auth