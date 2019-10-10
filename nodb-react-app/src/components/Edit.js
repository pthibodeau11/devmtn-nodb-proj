import React, { Component } from "react";
import axios from "axios";
import "./Edit.css";

class Edit extends Component {
  constructor() {
    super();
    this.state = {};
  }

  deleteEdit = () => {
    axios.delete(`/api/list/${this.props.element.id}`).then(response => {
      console.log(response.data);
      this.props.updateAllRequests(response.data);
    });
  };

  render() {
    const {
      name,
      beforeURL,
      status,
      comment,
      afterURL,
      email
    } = this.props.element;

    return (
      <div className="Edit">
        <section className="Left">
          <ul>Submitted by: {name}</ul>
          <div className="FixedImgSize">
            <img className="Image" src={beforeURL} />
          </div>
          <ul>Status: {status}</ul>
        </section>
        <section className="Right">
          <ul>{comment}</ul>
          <ul>{afterURL}</ul>
          <ul>{email}</ul>
        </section>
        <section className="Button-Sec">
          <button className="Delete-button" onClick={this.deleteEdit}>
            X
          </button>
        </section>
      </div>
    );
  }
}

export default Edit;
