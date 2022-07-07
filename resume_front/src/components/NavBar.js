import React, {Fragment, useState} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import '../css/NavBar.css'
import {
    AREA_ROUTE,
    AUTHORISATION_ROUTE,
    CATEGORY_ROUTE,
    CREATION_ROUTE,
    REGISTRATION_ROUTE,
} from "../utils/consts";
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../actions/auth';

const NavBar = ({logout, isAuthenticated}) => {
    const [redirect, setRedirect] = useState(false);

    const logout_user = () => {
        logout();
        setRedirect(true);
    };

    const guestLinks = () => (

        <Nav className="me-auto">
            <Nav.Link href={CATEGORY_ROUTE}>Examples</Nav.Link>
            <Nav.Link href={REGISTRATION_ROUTE}>Registration</Nav.Link>
            <Nav.Link href={AUTHORISATION_ROUTE}>Login</Nav.Link>
        </Nav>

    );

    const authLinks = () => (

        <Nav className="me-auto">
            <Nav.Link href={CATEGORY_ROUTE}>Examples</Nav.Link>
            <Nav.Link href={AREA_ROUTE}>Login</Nav.Link>
        </Nav>
    );

    return (
        <Fragment>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand id='logo' href='/'>YOUR RESUME</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {isAuthenticated ? authLinks() : guestLinks()}
                        <Nav>
                            <Button variant="primary" size="lg">
                                <Nav.Link href={CREATION_ROUTE}>Create Resume</Nav.Link>
                            </Button>{' '}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {redirect ? <Redirect to='/'/> : <Fragment></Fragment>}
        </Fragment>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {logout})(NavBar);
