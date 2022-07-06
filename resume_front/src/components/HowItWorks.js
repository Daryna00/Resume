import React from 'react';
import {Container} from "react-bootstrap";
import {CREATION_ROUTE} from "../utils/consts";
import '../css/HowItWork.css'

const HowItWork = () => {
    return (
        <Container>
            <section className="css-1fqo9h4">
            <header className="css-r4iqjo"><h2 className="css-md5jax">How it works</h2>
                <div className="css-mw93k4">3 Steps. 5 Minutes.</div>
            </header>
            <div className="css-ca2gc2">
                <div className="css-18jxpe7">
                    <div className="css-1jpu9op">1</div>
                    <div className="css-128y11d">
                        <div className="css-so6mbr">Import from LinkedIn</div>
                        <div className="css-idzr5c">Or start from scratch</div>
                    </div>
                </div>
                <div className="css-18jxpe7">
                    <div className="css-12a7v53">2</div>
                    <div className="css-128y11d">
                        <div className="css-so6mbr">Choose a template</div>
                        <div className="css-idzr5c">12 Hiring manager approved templates</div>
                    </div>
                </div>
                <div className="css-18jxpe7">
                    <div className="css-15pwtp8">3</div>
                    <div className="css-128y11d">
                        <div className="css-so6mbr">Share as web or PDF</div>
                        <div className="css-idzr5c">A resume for every application</div>
                    </div>
                </div>
            </div>
            <div className="css-bo9oke"><a href={CREATION_ROUTE} className="css-oc1pyl">Build My
                Resume
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" role="img"
                     aria-label="Arrow pointing right" className="css-1560b3">
                    <path d="M18.6667 9.33325L25.3333 15.9999L18.6667 22.6666M5.33334 15.9999L25 15.9999"
                          stroke-width="2"></path>
                </svg>
            </a></div>
            </section>
        </Container>
    );
};

export default HowItWork;