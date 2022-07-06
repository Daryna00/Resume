import React from 'react';
import '../css/Footer.css'


const Footer = () => {
    return (
        <footer className="css-vurnku">
            <nav className="css-125080j">
                <div className="css-tqpte"><h3 className="css-1xxx3v6">Company</h3>
                    <ul className="css-1h275wr">
                        <li><a href="/about" className="css-x1tehz">About</a></li>
                        <li><a href="/press" className="css-x1tehz">Press</a></li>
                        <li><a href="/pricing" className="css-x1tehz">Pricing</a></li>
                        <li><a href="https://twitter.com/standardresume" target="_blank" rel="noopener noreferrer"
                               className="css-x1tehz">Twitter</a></li>
                        <li><a href="https://www.linkedin.com/company/standard-resume-builder" target="_blank"
                               rel="noopener noreferrer" className="css-x1tehz">LinkedIn</a></li>
                    </ul>
                </div>
                <div className="css-tqpte"><h3 className="css-1xxx3v6">Support</h3>
                    <ul className="css-1h275wr">
                        <li><a href="/changelog" className="css-x1tehz">Changelog</a></li>
                        <li><a href="/contact" className="css-x1tehz">Contact</a></li>
                        <li><a href="/privacy-policy" className="css-x1tehz">Privacy</a></li>
                    </ul>
                </div>
                <div className="css-tqpte"><h3 className="css-1xxx3v6">Resumes</h3>
                    <ul className="css-1h275wr">
                        <li><a href="/resume-templates" className="css-x1tehz">Resume Templates</a></li>
                        <li><a href="/resume-builder" className="css-x1tehz">Resume Builder</a></li>
                        <li><a href="/linkedin-resume-builder" className="css-x1tehz">LinkedIn Resume Builder</a></li>
                        <li><a href="/examples" className="css-x1tehz">Resume Examples</a></li>
                        <li><a href="/resources" className="css-x1tehz">Resume Resources</a></li>
                    </ul>
                </div>
            </nav>
        </footer>

    );
};

export default Footer;