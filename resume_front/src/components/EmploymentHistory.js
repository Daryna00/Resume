import React, {useState} from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import RainbowDatepicker from "./Date";
import '../css/employmentHistory.css'

function EmploymentHistory() {
    const [inputList, setList] = useState([{jobTitle: '', city: '', employer:'', startDate:'',  endDate:'', description:''}]);

    const handleInputChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setList(list);

    }

    const handleRemove = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setList(list);
    }

    const handleAddClick = () => {
        setList([...inputList, {jobTitle: '', city: '', employer:'',  startDate:'',  endDate:'', description:''}]);
    }
    return (
        <Container className="content">
            <div className="row">

                {
                    inputList.map((x, i) => {
                        return (
                            <Row className="mb-35">
                                <Form.Group as={Col} md="4">
                                    <Form.Label className='label'>Job title</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Job title"
                                        onChange={e => handleInputChange(e, i)}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4">
                                    <Form.Label className='label'>City</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="City"
                                        onChange={e => handleInputChange(e, i)}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4">
                                    <Form.Label className='label'>Employer</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Employer"
                                        onChange={e => handleInputChange(e, i)}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="date">
                                    <div className="label_small">Start date</div>
                                    <RainbowDatepicker onChange={e => handleInputChange(e, i)}/>
                                    <div className="label_small">End date</div>
                                    <RainbowDatepicker onChange={e => handleInputChange(e, i)}/>
                                </Form.Group>
                                <Form.Group as={Col} className="mb-34">
                                    <Form.Label className='label'>Description</Form.Label>
                                    <Form.Control as="textarea" rows={4} id="controlTextarea02"
                                                  onChange={e => handleInputChange(e, i)}/>
                                </Form.Group>
                                {
                                    inputList.length !== 1 &&
                                    <button className="btn btn-remove"
                                            onClick={() => handleRemove(i)}>Remove</button>
                                }
                                {
                                    inputList.length - 1 === i &&
                                    <button className="btn btn-success" onClick={handleAddClick}>Add More</button>
                                }
                            </Row>
                        );
                    })}
            </div>
        </Container>
    );
}

export default EmploymentHistory;