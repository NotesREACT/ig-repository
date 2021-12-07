import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component{
    render(){
        return (
            <Link to="/home" > Home </Link>
        )
    }
}

export default Navbar;