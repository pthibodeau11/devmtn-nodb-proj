import React, { Component } from "react";
import "./EditURL.css";
import axios from "axios";

class EditURL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // editing: false,
      afterURL: ""
    };

    this.updateEdit = this.updateEdit.bind(this);

    // this.edit = this.edit.bind(this);
  }

  updateEdit(e) {
    console.log({ afterURL: e.target.value });
    // const { afterURL } = this.state;
    // e.preventDefault();
    axios
      .put(`/api/list/${this.props.id}`, {
        afterURL: e.target.value
      })
      .then(response => {
        console.log(response.data[0].afterURL);
        this.setState({ afterURL: response.data[0].afterURL });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange = event => {
    this.setState({ afterURL: event.target.value });
    console.log({ afterURL: event.target.value });
  };

  // edit(event) {
  //   const { afterURL } = this.state;
  //   const { id, edit } = this.props;
  //   if (event.key === "Enter" && afterURL.length !== 0) {
  //     edit(id, afterURL);
  //     this.setState({ editing: false });
  //   }
  // }

  render() {
    const { id, afterURL } = this.props;
    // const { editing } = this.state;
    console.log(id, afterURL);
    return (
      <div>
        <input
          placeholder="insert URL + hit Enter"
          type="text"
          // value={this.state.afterURL}
          onChange={this.handleChange}
          onKeyPress={this.updateEdit}
        />

        {/* <button onClick={() => this.setState({ editing: !editing, afterURL })}>
          x
        </button> */}
      </div>
    );
  }
}

export default EditURL;
