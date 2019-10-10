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
    if (name === "" || email === "" || comment === "" || beforeURL === "") {
      alert("It looks like you missed a field");
    } else {
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
        .catch(error => {
          console.log(error);
        });
    }
    this.setState({ name: "", email: "", beforeURL: "", comment: "" });
  };

  clearForm = () => {
    this.setState({ name: "", email: "", beforeURL: "", comment: "" });
  };

  render() {
    return (
      <form className="Submit-form">
        <input
          className="Input-field"
          type="text"
          placeholder="Name"
          onChange={this.handleNameChange}
          value={this.state.name}
        />
        <input
          className="Input-field"
          type="text"
          placeholder="Email"
          onChange={this.handleEmailChange}
          value={this.state.email}
        />
        <input
          className="Input-field"
          type="text"
          placeholder="Image URL"
          onChange={this.handleBeforeURLChange}
          value={this.state.beforeURL}
        />
        <textarea
          className="Input-field-desc"
          type="text"
          placeholder="What would you like done to your photo?"
          onChange={this.handleCommentChange}
          value={this.state.comment}
        />
        <div className="Request-Buttons">
          <button className="Form-Button" onClick={this.handleClick}>
            submit
          </button>
          <button className="Form-Button" onClick={this.clearForm}>
            reset
          </button>
        </div>
      </form>
    );
  }
}

export default NewRequest;
