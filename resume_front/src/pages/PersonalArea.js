import React, {useState} from 'react';
import {Button, Col, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import '../css/personal_area.css'
import SkillList from "../components/SkillSet";
import LanguageList from "../components/LanguageSet";
import RainbowDatepicker from "../components/Date";
import EmploymentHistory from "../components/EmploymentHistory";
import Education from "../components/Education";
import Courses from "../components/Courses";



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
            <Form id='formPersonalArea' noValidate validated={validated} onSubmit={handleSubmit} className='form'>
                <Row className="mb-34">
                    <div className="big_label">Main information</div>
                    <Form.Group as={Col} md="4" >
                        <Form.Label className='label'>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            defaultValue="Mark"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label className='label'>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Last name"
                            defaultValue="Otto"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" >
                        <Form.Label className='label'>Middle name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Middle name"
                            defaultValue="Oleksandrovich"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" >
                        <Form.Label className='label'>Wanted Job Title</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Wanted Job Title"
                                      defaultValue="Web developer"
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid address.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" >
                        <Form.Label className='label'>Email</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Email"
                                      defaultValue="@gmail.com"
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid address.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-34">
                    <Form.Group as={Col} md="6">
                        <Form.Label className='label'>Phone</Form.Label>
                        <Form.Control type="text" placeholder="Phone" pattern = "^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid phone.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" >
                        <Form.Label className='label'>Address</Form.Label>
                        <Form.Control type="text" placeholder="Address" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid address.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" >
                        <Form.Label className='label'>City</Form.Label>
                        <Form.Control type="text" placeholder="City" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" >
                        <Form.Label className='label'>State</Form.Label>
                        <Form.Control type="text" placeholder="State" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" >
                        <div className="label_small">Date of birthday</div>
                    <RainbowDatepicker/>
                    </Form.Group>
                    <Form.Group as={Col} className="position-relative mb-34">
                        <Form.Label className='label'>Your Photo</Form.Label>
                        <Form.Control
                            type="file"
                            name="file"
                            accept=".png,.jpg"
                        />
                        <Form.Control.Feedback className='label' type="invalid" tooltip>
                            Please provide a valid photo in jpg or png format less than 5Mg.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-34">
                    <Form.Group as={Col} className="mb-34"  >
                        <Form.Label className='label'>Biography</Form.Label>
                        <Form.Control as="textarea" rows={4}  id="controlTextarea00"/>
                    </Form.Group>
                </Row>
                <Row className="mb-34">
                    <Form.Group as={Col} className="mb-34" >
                        <Form.Label className='label'>Hobbies</Form.Label>
                        <Form.Control as="textarea" rows={4}  id="controlTextarea01"/>
                    </Form.Group>
                </Row>
                <Row className="mb-34">
                    <div className="big_label">Skill List</div>
                    <SkillList />
                </Row>
                <Row className="mb-34">
                    <div className="big_label">Language List</div>
                    <LanguageList/>
                </Row>
                <Row className="mb-34">
                    <div className="big_label_e">Employment History</div>
                   <EmploymentHistory/>
                </Row><Row className="mb-34">
                <div className="big_label_ed">Education</div>
                <Education/>
            </Row>
                <Row className="mb-34">
                    <div className="big_label_ed">Courses</div>
                    <Courses />
                </Row>
                <Row className="mb-34">
                    <div className="big_label">URL List</div>
                    <Form.Label htmlFor="basic-url" className='label'>URL</Form.Label>
                    <InputGroup className="col">
                        <InputGroup.Text id="basic-addon3">
                            https://example.com/users/
                        </InputGroup.Text>
                        <FormControl id="basic-url1" aria-describedby="basic-addon3" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid URL.
                        </Form.Control.Feedback>
                    </InputGroup>
                    <Form.Label htmlFor="basic-url" className='label'>GitHub</Form.Label>
                    <InputGroup className="col">
                        <InputGroup.Text id="basic-addon3">
                            https://github.com/users/
                        </InputGroup.Text>
                        <FormControl id="basic-url2" pattern="/^([A-Za-z0-9]+@|http(|s)\:\/\/)([A-Za-z0-9.]+(:\d+)?)(?::|\/)([\d\/\w.-]+?)(\.git)?$/i" aria-describedby="basic-addon3" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid URL of GitHub.
                        </Form.Control.Feedback>
                    </InputGroup>
                    <Form.Label htmlFor="basic-url" className='label'>Facebook</Form.Label>
                    <InputGroup className="col">
                        <InputGroup.Text id="basic-addon3">
                            https://facebook.com/users/
                        </InputGroup.Text>
                        <FormControl id="basic-url3" pattern="/(?:http:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-]*)/" aria-describedby="basic-addon3" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid URL of Facebook.
                        </Form.Control.Feedback>
                    </InputGroup>
                    <Form.Label htmlFor="basic-url" className='label'>Linkedin</Form.Label>
                    <InputGroup className="col">
                        <InputGroup.Text id="basic-addon3">
                            https://linkedin.com/users/
                        </InputGroup.Text>
                        <FormControl id="basic-url4" pattern="^https?://((www|\w\w)\.)?linkedin.com/((in/[^/]+/?)|(pub/[^/]+/((\w|\d)+/?){3}))$" aria-describedby="basic-addon3" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid URL of Linkedin.
                        </Form.Control.Feedback>
                    </InputGroup>
                <Form.Group className="mb-34">
                    <Form.Check
                        className='label01'
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