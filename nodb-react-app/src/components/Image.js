import React, { Component } from "react";
import "./Image.css";

class Image extends Component {
  constructor() {
    super();
    this.state = {
      images: [
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />,
        <img
          className="Image"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * (1000 - 1) + 1
          )}/367/267`}
          alt={""}
        />
      ]
    };
  }

  render() {
    return (
      <div className="Gallery-Body">
        <h1 className="Step">STEP 1:</h1>
        <h2 className="Gallery-Header">CHOOSE A PHOTO</h2>
        <h6 className="Gallery-Subheader">
          (remember to right-click > copy image address)
        </h6>
        <div className="Images-Grid">{this.state.images}</div>
      </div>
    );
  }
}

export default Image;
