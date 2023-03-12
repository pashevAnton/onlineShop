import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white', textDecoration: "none"}} to={SHOP_ROUTE}>DeviceShop</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: "white"}}>
                        <Button variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)} className="ms-2">Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: "white"}}>
                        <Button variant={"outline-light"} onClick={() => {user.setIsAuth(true)}}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;