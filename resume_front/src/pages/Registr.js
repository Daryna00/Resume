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
            signup( email, password);
            setAccountCreated(true);
        } else {
            alert('Wrong password! Please try again!')
        }
    };

    const continueWithGoogle = async () => {
        try {
            const res = await axios.get(`${process.env.APP_API_URL}/api/v1/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    };


    if (isAuthenticated) {
        return <Redirect to='/personal/area' />
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
                <Form.Control type="password" placeholder="Password" name='password' value={password} onChange={e => onChange(e)} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRePassword">
                <Form.Label>Password confirmation</Form.Label>
                <Form.Control type="password" placeholder="Password confirmation" name='re_password' value={re_password} onChange={e => onChange(e)} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required/>
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