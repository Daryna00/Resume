import React from 'react';
import CarouselBar from "../components/CarouselBar";
import {Container} from "react-bootstrap";
import AnimeText from "../components/AnimeText";

const ResumeStore = () => {
    return (
            <Container>
                <div>
                    <AnimeText/>
                </div>
                <div><CarouselBar/></div>
            </Container>
    );
};

export default ResumeStore;