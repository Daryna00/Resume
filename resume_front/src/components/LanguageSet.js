import React, { useState } from 'react';
import {
    Container,
    ListGroup,
    Button,
} from 'react-bootstrap';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import {v4 as uuid} from 'uuid';

import '../css/transitionGroup.css';
import Range from "./Range";

function LanguageList() {
    const [items, setItems] = useState([
        { id: uuid(), text: 'English' },
        { id: uuid(), text: 'German' },
        { id: uuid(), text: 'Ukrainian' },
        { id: uuid(), text: 'Polish' },
    ]);
    return (
        <Container style={{ marginTop: '2rem' }}>
            <div className="label_skill">Language set</div>
            <ListGroup style={{ marginBottom: '1rem' }}>
                <TransitionGroup className="todo-list">
                    {items.map(({ id, text }) => (
                        <CSSTransition
                            key={id}
                            timeout={500}
                            classNames="item"
                        >
                            <ListGroup.Item>
                                <Button
                                    className="remove-btn"
                                    variant="danger"
                                    size="sm"
                                    onClick={() =>
                                        setItems(items =>
                                            items.filter(item => item.id !== id)
                                        )
                                    }
                                >
                                    &times;
                                </Button>
                                {text} <Range/>
                            </ListGroup.Item>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
            <Button
                onClick={() => {
                    const text = prompt('Enter your skill.');
                    if (text) {
                        setItems(items => [
                            ...items,
                            { id: uuid(), text },
                        ]);
                    }
                }}
            >
                Add Item
            </Button>
        </Container>
    );
};

export default LanguageList;