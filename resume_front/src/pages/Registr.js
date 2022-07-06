import React from 'react';
import {Button, Form} from "react-bootstrap";

const Registr = () => {
    return (
        <Form className='form-login'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password confirmation</Form.Label>
                <Form.Control type="password" placeholder="Password confirmation" />
            </Form.Group>
            <Button variant="primary" className="button-submit" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Registr;