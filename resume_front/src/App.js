import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
    return (
        <BrowserRouter>
            <div><NavBar/>
            <AppRouter/></div>
            <div><Footer/></div>
        </BrowserRouter>
    );
};

export default App;
