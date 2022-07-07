import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import '../css/NavBar.css'
import {
    AREA_ROUTE,
    AUTHORISATION_ROUTE,
    CATEGORY_ROUTE,
    CREATION_ROUTE,
    REGISTRATION_ROUTE,
    STORE_ROUTE
} from "../utils/consts";

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand id='logo' href={STORE_ROUTE}>YOUR RESUME</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href={CATEGORY_ROUTE}>Examples</Nav.Link>
                        <Nav.Link href={REGISTRATION_ROUTE}>Registration</Nav.Link>
                        <Nav.Link href={AUTHORISATION_ROUTE}>Login</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="primary" size="lg">
                            <Nav.Link href={CREATION_ROUTE}>Create Resume</Nav.Link>
                        </Button>{' '}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;