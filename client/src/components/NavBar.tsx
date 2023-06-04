import { FC, useContext } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { AllRoutes } from "../consts/consts";
import { Context } from "../main";
import { observer } from "mobx-react-lite";

const NavBar: FC = observer(() => {

    const { user } = useContext(Context)

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to={AllRoutes.SHOP_ROUTE} style={{ color: "white" }}>КупиДевайс</Link>
                {user._isAuth
                    ?
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"} style={{ marginRight: 10 }}>Админ панель</Button>
                        <Button variant={"outline-light"}>Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})

export default NavBar