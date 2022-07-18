import Range from "./Range";
import React, {useState} from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import '../css/employmentHistory.css'

function LanguageList() {
    const [inputList, setInputList] = useState([{skillLanguage: '', range: ''}]);

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
        setInputList([...inputList, {skillLanguage: '', range: ''}]);
    }
    return (
        <Container className="content">
            <div className="row">

                {
                    inputList.map((x, i) => {
                        return (
                            <Row className="mb-37">
                                <Form.Group as={Col} md="4" className="mb-37" >
                                    <Form.Label className='label'>Language set</Form.Label>
                                    <div className="mb-38">
                                        <Form.Control
                                            className='skill_input'
                                            required
                                            type="text"
                                            placeholder="Language skill"
                                            onChange={e => inputChange(e, i)}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Range onChange={e => inputChange(e, i)}/>
                                        {
                                            inputList.length !== 1 &&
                                            <button className="btn btn-remove"
                                                    onClick={() => handleRemove(i)}>Remove</button>
                                        }
                                    </div>
                                </Form.Group>
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

export default LanguageList;