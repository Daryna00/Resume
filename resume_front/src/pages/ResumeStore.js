import React from 'react';
import CarouselBar from "../components/CarouselBar";
import {Container} from "react-bootstrap";
import AnimeText from "../components/AnimeText";
import HowItWork from "../components/HowItWorks";

const ResumeStore = () => {
    return (
            <Container>
                <div>
                    <AnimeText/>
                </div>
                <div><CarouselBar/></div>
                <div><HowItWork/></div>
            </Container>
    );
};

export default ResumeStore;