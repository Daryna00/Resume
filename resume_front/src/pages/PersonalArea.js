import React, {useState} from 'react';
import {Button, Col, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import '../css/personal_area.css'

const PersonalArea = () => {
        const [validated, setValidated] = useState(false);

        const handleSubmit = (event) => {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }

            setValidated(true);
        };

        return (
            <Form id='formPersonalArea' noValidate validated={validated} onSubmit={handleSubmit} class='form'>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label class='label'>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            defaultValue="Mark"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label class='label'>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Last name"
                            defaultValue="Otto"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom000">
                        <Form.Label class='label'>Middle name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Middle name"
                            defaultValue="Oleksandrovich"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label class='label'>Username</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom001">
                        <Form.Label class='label'>Phone</Form.Label>
                        <Form.Control type="text" placeholder="Phone" pattern = "^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid phone.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label class='label'>City</Form.Label>
                        <Form.Control type="text" placeholder="City" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label class='label'>State</Form.Label>
                        <Form.Control type="text" placeholder="State" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                        <Form.Label class='label'>Zip</Form.Label>
                        <Form.Control type="text" placeholder="Zip" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label class='label'>Biography</Form.Label>
                        <Form.Control as="textarea" rows={4}  id="controlTextarea"/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group as={Col} className="position-relative mb-3">
                    <Form.Label class='label'>File</Form.Label>
                    <Form.Control
                        type="file"
                        name="file"
                        accept=".png,.jpg"
                    />
                    <Form.Control.Feedback class='label' type="invalid" tooltip>
                        Please provide a valid photo in jpg or png format less than 5Mg.
                    </Form.Control.Feedback>
                </Form.Group>
                    <Form.Label htmlFor="basic-url" class='label'>GitHub</Form.Label>
                    <InputGroup className="col">
                        <InputGroup.Text id="basic-addon3">
                            https://github.com/users/
                        </InputGroup.Text>
                        <FormControl id="basic-url" pattern="/^([A-Za-z0-9]+@|http(|s)\:\/\/)([A-Za-z0-9.]+(:\d+)?)(?::|\/)([\d\/\w.-]+?)(\.git)?$/i" aria-describedby="basic-addon3" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid URL of GitHub.
                        </Form.Control.Feedback>
                    </InputGroup>
                    <Form.Label htmlFor="basic-url" class='label'>Facebook</Form.Label>
                    <InputGroup className="col">
                        <InputGroup.Text id="basic-addon3">
                            https://facebook.com/users/
                        </InputGroup.Text>
                        <FormControl id="basic-url" pattern="/(?:http:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-]*)/" aria-describedby="basic-addon3" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid URL of Facebook.
                        </Form.Control.Feedback>
                    </InputGroup>
                    <Form.Label htmlFor="basic-url" class='label'>Linkedin</Form.Label>
                    <InputGroup className="col">
                        <InputGroup.Text id="basic-addon3">
                            https://linkedin.com/users/
                        </InputGroup.Text>
                        <FormControl id="basic-url" pattern="^https?://((www|\w\w)\.)?linkedin.com/((in/[^/]+/?)|(pub/[^/]+/((\w|\d)+/?){3}))$" aria-describedby="basic-addon3" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid URL of Linkedin.
                        </Form.Control.Feedback>
                    </InputGroup>
                <Form.Group className="mb-3" class='label01'>
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                    />
                </Form.Group>
                <Button type="submit" >Submit form</Button>
                </Row>
            </Form>

        );
    };
export default PersonalArea;