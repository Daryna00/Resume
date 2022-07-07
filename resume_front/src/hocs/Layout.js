import React, { useEffect } from 'react';
import NavBar from '../components/NavBar.js';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from '../actions/auth';
import Footer from "../components/Footer";

const Layout = ({ checkAuthenticated, load_user, children }) => {
    useEffect(() => {
        checkAuthenticated();
        load_user();
    }, []);

    return (
        <div>
            <NavBar />
            {children}
            <Footer/>
        </div>
    );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);