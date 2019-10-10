import React, { Component } from "react";
import axios from "axios";
import "./Edit.css";

class Edit extends Component {
  constructor() {
    super();
    this.state = {};
  }

  deleteEdit = () => {
    axios.delete(`/api/travel${this.props.element.id}`).then(response => {
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
          <ul>{name}</ul>
          <img className="Image" src={beforeURL} />
          <ul>{status}</ul>
        </section>
        <section className="Right">
          <ul>{comment}</ul>
          <ul>{afterURL}</ul>
          <ul>{email}</ul>
          <button onClick={this.deleteEdit}>DELETE</button>
        </section>
      </div>
    );
  }
}

export default Edit;
