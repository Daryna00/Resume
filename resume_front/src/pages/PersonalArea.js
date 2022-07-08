import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";

const PersonalArea = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        middle_name: '',
        phone: ''
    });
    const { first_name, last_name, middle_name, phone} = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    return (
        <Form className='form-personal-area' >
            <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label>First name</Form.Label>
                <Form.Control type="name" placeholder="First name" name='name' value={first_name} onChange={e => onChange(e)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="name" placeholder="Last name" name='name' value={last_name} onChange={e => onChange(e)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMiddleName">
                <Form.Label>Middle name</Form.Label>
                <Form.Control type="name" placeholder="Middle name" name='name' value={middle_name} onChange={e => onChange(e)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="phone" placeholder="Phone" name='phone' value={phone} onChange={e => onChange(e)} pattern = "/^\+380\d{3}\d{2}\d{2}\d{2}$/" title="The number must start with +380 and has 9 digits." required/>
            </Form.Group>
            <Button variant="primary" className="button-submit" type="submit">
                Submit
            </Button>
        </Form>
    );
};
export default PersonalArea;