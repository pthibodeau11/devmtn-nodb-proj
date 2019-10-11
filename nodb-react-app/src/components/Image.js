import React, { Component } from "react";
import axios from "axios";
import "./Image.css";

class Image extends Component {
  constructor() {
    super();
    this.state = {
      images: [
        <img src={`https://source.unsplash.com/featured/?photography`} />,
        <img src={`https://source.unsplash.com/featured/?food`} />,
        <img src={`https://source.unsplash.com/featured/?travel`} />,
        <img src={`https://source.unsplash.com/featured/?nature`} />,
        <img src={`https://source.unsplash.com/featured/?city`} />
      ]
    };
  }

  render() {
    return (
      <div>
        <div className="This-Image">{this.state.images}</div>
      </div>
    );
  }
}

export default Image;
