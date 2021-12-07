import React, { Component } from "react";
import NavbarIG from "./navbarIG";
import TemplateCard from "./templateCard";

class HomeIG extends Component {
    render () {
        return (
            <div>
                <NavbarIG />
                <TemplateCard />
            </div>
        )
    }
}

export default HomeIG;