import React, { Component } from "react";
import IterationCard from "./interationCard";
import NavbarIG from "./navbarIG";
import data from "../../assets/data/cards.json"

class HomeIG extends Component {
    state = {
        cards: data
    }
    render () {
        return (
            <div >
                <NavbarIG />
                <IterationCard data={this.state.cards} />
            </div>
        )
    }
}

export default HomeIG;