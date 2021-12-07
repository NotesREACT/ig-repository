import React, { Component } from "react";
import Navbar from "./navbar";
import logo from '../assets/ico/logo.svg';

class LandingPage extends Component{
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Navbar />
                </header>
            </div>
        )
    }
}

export default LandingPage;