import React from 'react';
import {Button, Form, Nav} from "react-bootstrap";
import '../css/Login.css'
import {AREA_ROUTE, CATEGORY_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    return (
        <Form className='form-login'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" className="button-submit" type="submit">
                Submit
            </Button>
            <Nav className="mb-3">
                <Nav.Link href='#'>Forgot password</Nav.Link>
            </Nav>
            <Nav className="mb-3">
                <Nav.Link href={REGISTRATION_ROUTE}>Registration</Nav.Link>
            </Nav>
        </Form>
    );
};

export default Auth;