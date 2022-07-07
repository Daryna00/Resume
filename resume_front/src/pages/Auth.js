import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import axios from 'axios';
import {Button, Form, Nav} from "react-bootstrap";
import {REGISTRATION_ROUTE} from "../utils/consts";
import '../css/Login.css'

const Auth = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
    };

    const continueWithGoogle = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    };

    if (isAuthenticated) {
        return <Redirect to='/store' />
    }

    return (
        <Form className='form-login'  onSubmit={e => onSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email}
                              onChange={e => onChange(e)} requird/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={email}
                              onChange={e => onChange(e)}
                              minLength='6' requird/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out"/>
            </Form.Group>
            <Button variant="primary" className="button-submit" type="submit">
                Submit
            </Button>
            <Button className='btn btn-danger mt-3' onClick={continueWithGoogle}>
                Continue With Google
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

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Auth);

