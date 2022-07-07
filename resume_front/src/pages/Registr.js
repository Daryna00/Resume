import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';
import axios from 'axios';
import '../css/Login.css'
import {Button, Form} from "react-bootstrap";

const Registr = ({ signup, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        re_password: ''
    });

    const { email, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            signup( email, password, re_password);
            setAccountCreated(true);
        }
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
    if (accountCreated) {
        return <Redirect to='/authorisation' />
    }
    return (
        <Form className='form-login' onSubmit={e => onSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' value={email} onChange={e => onChange(e)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' value={password} onChange={e => onChange(e)} minLength='6' required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password confirmation</Form.Label>
                <Form.Control type="password" placeholder="Password confirmation" name='re_password' value={re_password} onChange={e => onChange(e)} minLength='6' required/>
            </Form.Group>
            <Button variant="primary" className="button-submit" type="submit">
                Submit
            </Button>
            <Button className='btn btn-danger mt-3' onClick={continueWithGoogle}>
                Continue With Google
            </Button>
        </Form>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Registr);