import React, { Component } from "react";


class TemplateCard extends Component {
  render() {
    return (
      <div class="card">
        <img class="imgSize" src={require(`../../assets/img/${this.props.imgURL}.jpg`).default} alt={this.props.imgName}/>
        
        <div class="card-body">
          <h2 class="card-title">{this.props.imgName}</h2>
          <h4 class="card-text">
            {this.props.imgUser}
          </h4>
        </div>
      </div>
    );
  }
}

export default TemplateCard;
