import React, { Component } from "react";
import TemplateCard from "./templateCard";

class IterationCard extends Component {
  render() {
    return (
      <div class="container">
        {this.props.data.cards.map((card, index) => (
          <TemplateCard
            key={index}
            imgName={card.imgName}
            imgUser={card.imgUser}
            imgURL={card.imgURL}
            indexCard={index}
          ></TemplateCard>
        ))}
      </div>
    );
  }
}

export default IterationCard;
