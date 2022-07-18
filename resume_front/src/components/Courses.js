import React, {useState} from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import RainbowDatepicker from "./Date";
import '../css/employmentHistory.css'

function Courses() {
    const [inputList, setInputList] = useState([{course: '', institution: '', startDate:'',  endDate:'', description:''}]);

    const inputChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);

    }

    const handleRemove = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    }

    const addClick = () => {
        setInputList([...inputList, {course: '', institution: '', startDate:'',  endDate:'', description:''}]);
    }
    return (
        <Container className="content">
            <div className="row">

                {
                    inputList.map((x, i) => {
                        return (
                            <Row className="mb-35">
                                <Form.Group as={Col} md="4" >
                                    <Form.Label className='label'>Course</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Course"
                                        onChange={e => inputChange(e, i)}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" >
                                    <Form.Label className='label'>Institution</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Institution"
                                        onChange={e => inputChange(e, i)}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="date" >
                                    <div className="label_small">Start date</div>
                                    <RainbowDatepicker onChange={e => inputChange(e, i)}/>
                                    <div className="label_small">End date</div>
                                    <RainbowDatepicker onChange={e => inputChange(e, i)}/>
                                </Form.Group>
                                <Form.Group as={Col} className="mb-34"  >
                                    <Form.Label className='label'>Description</Form.Label>
                                    <Form.Control as="textarea" rows={4}  id="controlTextarea" onChange={e => inputChange(e, i)}/>
                                </Form.Group>

                                {
                                    inputList.length !== 1 &&
                                    <button className="btn btn-remove"
                                            onClick={() => handleRemove(i)}>Remove</button>
                                }
                                {
                                    inputList.length - 1 === i &&
                                    <button className="btn btn-success" onClick={addClick}>Add More</button>
                                }
                            </Row>
                        );
                    })}
            </div>
        </Container>
    );
}

export default Courses;