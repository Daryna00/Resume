import React, {useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import '../css/personal_area.css'
// import SkillList from "../components/SkillSet";
// import LanguageList from "../components/LanguageSet";
// import Education from "../components/Education";
// import Courses from "../components/Courses";
// import EmploymentHistory from "../components/EmploymentHistory";
import RainbowDatepicker from "../components/Date";
import axios from 'axios';
import {connect} from "react-redux";


const PersonalArea = () => {
    const urlPut = `${process.env.REACT_APP_API_URL}/api/v1/resume/main-info/${1}/`;
    const urlGet = `${process.env.REACT_APP_API_URL}/api/v1/resume/main-info/`;
    const [formData, setFormData] = useState({
        user: '',
        first_name: '',
        last_name: '',
        middle_name: '',
        vacancy: '',
        email: '',
        phone: '',
        additional_address_info: '',
        city: '',
        country: '',
        date_of_birth: '',
        photo: '',
        about_me: '',
        hobbies: ''
    });
    const configG = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const {
        last_name,
        middle_name,
        vacancy,
        city,
        country,
        phone,
        additional_address_info,
        email,
        date_of_birth,
        photo,
        about_me,
        hobbies
    } = formData;
    const onChange = e =>{setFormData({...formData, [e.target.name]: e.target.value});  console.log(formData)} ;

    let valueUser=[];
    const onGet = async () =>{
        axios.get(urlGet, configG)
            .then((response)=>{
                console.log(response);
                valueUser = response.data;
                this.setState({ list:response.data.result
                }).catch((error)=>{
                        console.log(error);
                    })
            })
    }
    // const onGet = async () =>{
    //     const response = await
    //     axios.get(urlGet, configG).then(res => {
    //         const dataG = res.data;
    //         this.setState({ dataG });
    //     });
    //     console.log(response.data)
    //     console.log(response.data.results[0])
    // };


    const onSubmit = (e) => {
        e.preventDefault();
        axios.put(urlPut, {
            user:  this.state.list.map((value)=>{return value.user;}),
            first_name:  formData.first_name,
            last_name: formData.last_name,
            middle_name: formData.middle_name,
            vacancy: formData.vacancy,
            city: formData.city,
            country: formData.country,
            phone: formData.phone,
            additional_address_info: formData.additional_address_info,
            email: formData.email,
            date_of_birth: formData.date_of_birth,
            photo: formData.photo,
            about_me: formData.about_me,
            hobbies: formData.hobbies
        },config)
            .then(res => {
                console.log(res.data)
            })
    };
    return (
        <Form id='formPersonalArea' onSubmit={e => onSubmit(e)} className='form'>
            <Button type="submit" onClick={onGet} >Data form</Button>
            <Row className="mb-34">
                <div className="big_label">Main information</div>
                <Form.Group as={Col} md="4">
                    <Form.Label className='label'>First name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        name="first_name"
                        value={valueUser[0].map((value)=>{return value.user;})} onChange={e => onChange(e)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4">
                    <Form.Label className='label'>Last name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        name="last_name"
                        value={last_name} onChange={e => onChange(e)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4">
                    <Form.Label className='label'>Middle name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Middle name"
                        name="middle_name"
                        value={middle_name} onChange={e => onChange(e)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6">
                    <Form.Label className='label'>Wanted Job Title</Form.Label>
                    <Form.Control type="text"
                                  placeholder="Wanted Job Title"
                                  name="vacancy"
                                  value={vacancy} onChange={e => onChange(e)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid address.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6">
                    <Form.Label className='label'>Email</Form.Label>
                    <Form.Control type="text"
                                  placeholder="Email"
                                  name="email"
                                  value={email} onChange={e => onChange(e)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid address.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-34">
                <Form.Group as={Col} md="6">
                    <Form.Label className='label'>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Phone"
                                  name="phone"
                                  pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
                                  value={phone} onChange={e => onChange(e)}/>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid phone.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6">
                    <Form.Label className='label'>Address</Form.Label>
                    <Form.Control type="text" placeholder="Address"
                                  name="additional_address_info"
                                  value={additional_address_info} onChange={e => onChange(e)}/>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid address.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6">
                    <Form.Label className='label'>City</Form.Label>
                    <Form.Control type="text" placeholder="City" name="city"
                                  value={city} onChange={e => onChange(e)}/>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3">
                    <Form.Label className='label'>State</Form.Label>
                    <Form.Control type="text" placeholder="State" name="country"
                                  value={country}
                                  onChange={e => onChange(e)}/>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3">
                    <div className="label_small">Date of birthday</div>
                    <RainbowDatepicker name="date_of_birth" value={date_of_birth} onChange={e => onChange(e)}/>
                </Form.Group>
                <Form.Group as={Col} className="position-relative mb-34">
                    <Form.Label className='label'>Your Photo</Form.Label>
                    <Form.Control
                        type="file"
                        name="photo"
                        accept=".png,.jpg"
                        value={photo} onChange={e => onChange(e)}
                    />
                    <Form.Control.Feedback className='label' type="invalid" tooltip>
                        Please provide a valid photo in jpg or png format less than 5Mg.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-34">
                <Form.Group as={Col} className="mb-34">
                    <Form.Label className='label'>Biography</Form.Label>
                    <Form.Control as="textarea" rows={4} id="controlTextarea00" name="about_me"
                                  value={about_me}
                                  onChange={e => onChange(e)}/>
                </Form.Group>
            </Row>
            <Row className="mb-34">
                <Form.Group as={Col} className="mb-34">
                    <Form.Label className='label'>Hobbies</Form.Label>
                    <Form.Control as="textarea" rows={4} id="controlTextarea01" name="hobbies"
                                  value={hobbies}
                                  onChange={e => onChange(e)}/>
                </Form.Group>
                <Button type="submit">Submit form</Button>
            </Row>
            {/*    <Row className="mb-34">*/}
            {/*        <div className="big_label">Skill List</div>*/}
            {/*        <SkillList />*/}
            {/*    </Row>*/}
            {/*    <Row className="mb-34">*/}
            {/*        <div className="big_label">Language List</div>*/}
            {/*        <LanguageList/>*/}
            {/*    </Row>*/}
            {/*    <Row className="mb-34">*/}
            {/*        <div className="big_label_e">Employment History</div>*/}
            {/*       <EmploymentHistory/>*/}
            {/*    </Row><Row className="mb-34">*/}
            {/*    <div className="big_label_ed">Education</div>*/}
            {/*    <Education/>*/}
            {/*</Row>*/}
            {/*    <Row className="mb-34">*/}
            {/*        <div className="big_label_ed">Courses</div>*/}
            {/*        <Courses />*/}
            {/*    </Row>*/}
            {/*    <Row className="mb-34">*/}
            {/*        <div className="big_label">URL List</div>*/}
            {/*        <Form.Label htmlFor="basic-url" className='label'>URL</Form.Label>*/}
            {/*        <InputGroup className="col">*/}
            {/*            <InputGroup.Text id="basic-addon3">*/}
            {/*                https://example.com/users/*/}
            {/*            </InputGroup.Text>*/}
            {/*            <FormControl id="basic-url1" aria-describedby="basic-addon3" />*/}
            {/*            <Form.Control.Feedback type="invalid">*/}
            {/*                Please provide a valid URL.*/}
            {/*            </Form.Control.Feedback>*/}
            {/*        </InputGroup>*/}
            {/*        <Form.Label htmlFor="basic-url" className='label'>GitHub</Form.Label>*/}
            {/*        <InputGroup className="col">*/}
            {/*            <InputGroup.Text id="basic-addon3">*/}
            {/*                https://github.com/users/*/}
            {/*            </InputGroup.Text>*/}
            {/*            <FormControl id="basic-url2" pattern="/^([A-Za-z0-9]+@|http(|s)\:\/\/)([A-Za-z0-9.]+(:\d+)?)(?::|\/)([\d\/\w.-]+?)(\.git)?$/i" aria-describedby="basic-addon3" />*/}
            {/*            <Form.Control.Feedback type="invalid">*/}
            {/*                Please provide a valid URL of GitHub.*/}
            {/*            </Form.Control.Feedback>*/}
            {/*        </InputGroup>*/}
            {/*        <Form.Label htmlFor="basic-url" className='label'>Facebook</Form.Label>*/}
            {/*        <InputGroup className="col">*/}
            {/*            <InputGroup.Text id="basic-addon3">*/}
            {/*                https://facebook.com/users/*/}
            {/*            </InputGroup.Text>*/}
            {/*            <FormControl id="basic-url3" pattern="/(?:http:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-]*)/" aria-describedby="basic-addon3" />*/}
            {/*            <Form.Control.Feedback type="invalid">*/}
            {/*                Please provide a valid URL of Facebook.*/}
            {/*            </Form.Control.Feedback>*/}
            {/*        </InputGroup>*/}
            {/*        <Form.Label htmlFor="basic-url" className='label'>Linkedin</Form.Label>*/}
            {/*        <InputGroup className="col">*/}
            {/*            <InputGroup.Text id="basic-addon3">*/}
            {/*                https://linkedin.com/users/*/}
            {/*            </InputGroup.Text>*/}
            {/*            <FormControl id="basic-url4" pattern="^https?://((www|\w\w)\.)?linkedin.com/((in/[^/]+/?)|(pub/[^/]+/((\w|\d)+/?){3}))$" aria-describedby="basic-addon3" />*/}
            {/*            <Form.Control.Feedback type="invalid">*/}
            {/*                Please provide a valid URL of Linkedin.*/}
            {/*            </Form.Control.Feedback>*/}
            {/*        </InputGroup>*/}
            {/*    <Form.Group className="mb-34">*/}
            {/*        <Form.Check*/}
            {/*            className='label01'*/}
            {/*            required*/}
            {/*            label="Agree to terms and conditions"*/}
            {/*            feedback="You must agree before submitting."*/}
            {/*            feedbackType="invalid"*/}
            {/*        />*/}
            {/*    </Form.Group>*/}
            {/*    <Button type="submit" >Submit form</Button>*/}
            {/*    </Row>*/}
        </Form>
    );
};
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps)(PersonalArea);