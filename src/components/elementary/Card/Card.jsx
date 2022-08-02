import React, { Component } from "react";
import './Card.scss';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: props.title
    }
  }
  render() {
    return (
      <div className="card-layout">
        <div className="card-title">
            {this.state.title}
        </div>
        <div className="card-content">
            
        </div>        
      </div>
    );
  }
}

export default Card;
