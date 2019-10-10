import React, { Component } from "react";
import axios from "axios";
import "./NewRequest.css";

class NewRequest extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      beforeURL: "",
      comment: ""
    };
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handleBeforeURLChange = e => {
    this.setState({ beforeURL: e.target.value });
  };

  handleCommentChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleClick = e => {
    const { name, email, beforeURL, comment } = this.state;
    e.preventDefault();
    axios
      .post("/api/list", {
        name,
        email,
        beforeURL,
        comment
      })
      .then(response => {
        console.log(response);
      })
      .then(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <form className="Submit-form">
        <input
          className="Input-field"
          type="text"
          placeholder="Name"
          onChange={this.handleNameChange}
        />
        <input
          className="Input-field"
          type="text"
          placeholder="Email"
          onChange={this.handleEmailChange}
        />
        <input
          className="Input-field"
          type="text"
          placeholder="Image URL"
          onChange={this.handleBeforeURLChange}
        />
        <textarea
          className="Input-field-desc"
          type="text"
          placeholder="What would you like done to your photo?"
          onChange={this.handleCommentChange}
        />
        <button onClick={this.handleClick}>submit</button>
      </form>
    );
  }
}

export default NewRequest;
