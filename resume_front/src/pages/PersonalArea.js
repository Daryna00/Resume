import React, {useState} from 'react';
import {Button, Col, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import '../css/personal_area.css'
import AList from "../components/TransitionGroup";

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
                <Row className="mb-34">
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
                    <Form.Group as={Col} md="6" controlId="validationCustom009">
                        <Form.Label class='label'>Wanted Job Title</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Wanted Job Title"
                                      defaultValue="Web developer"
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid address.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-34">
                    <Form.Group as={Col} md="6" controlId="validationCustom001">
                        <Form.Label class='label'>Phone</Form.Label>
                        <Form.Control type="text" placeholder="Phone" pattern = "^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid phone.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom009">
                        <Form.Label class='label'>Address</Form.Label>
                        <Form.Control type="text" placeholder="Address" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid address.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label class='label'>City</Form.Label>
                        <Form.Control type="text" placeholder="City" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label class='label'>State</Form.Label>
                        <Form.Control type="text" placeholder="State" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                        <Form.Label class='label'>Zip</Form.Label>
                        <Form.Control type="text" placeholder="Zip" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-34">
                    <Form.Group as={Col} className="mb-34" controlId="exampleForm.ControlTextarea1">
                        <Form.Label class='label'>Biography</Form.Label>
                        <Form.Control as="textarea" rows={4}  id="controlTextarea"/>
                    </Form.Group>
                </Row>
                <Row className="mb-34">
                    <Form.Group as={Col} className="mb-34" controlId="exampleForm.ControlTextarea1">
                        <Form.Label class='label'>Hobbies</Form.Label>
                        <Form.Control as="textarea" rows={4}  id="controlTextarea"/>
                    </Form.Group>
                </Row>
                <Row className="mb-34">
                    <AList />
                </Row>


                <Row className="mb-34">
                <Form.Group as={Col} className="position-relative mb-34">
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
                <Form.Group className="mb-34" class='label01'>
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