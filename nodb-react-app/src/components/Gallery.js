import React, { Component } from "react";
import Image from "./Image";
import "./Gallery.css";

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      images: ["1"]
    };
  }

  render() {
    let mappedImages = this.state.images.map(element => {
      return <Image element={element} updateImages={this.updateImages} />;
    });
    return <div className="Image-Gallery">{mappedImages}</div>;
  }
}

// Gallery.propTypes = {
//   imageUrls: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
// };

export default Gallery;
