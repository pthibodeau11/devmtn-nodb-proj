import React, { Component } from "react";
import "./EditURL.css";
import axios from "axios";

class EditURL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      afterURL: this.props.afterURL
    };

    // this.edit = this.edit.bind(this);
  }

  updateEdit = editUrl => {
    axios
      .put(`/api/list/${this.props.id}`, {
        editUrl: this.state.afterURL
      })
      .then(response => {
        console.log(response.data);
        this.setState({ afterURL: response.data[0].afterURL });
      });
  };

  //   edit(event) {
  //     const { afterURL } = this.state;
  //     const { id, edit } = this.props;
  //     if (event.key === "Enter" && afterURL.length !== 0) {
  //       edit(id, afterURL);
  //       this.setState({ editing: false });
  //     }
  //   }

  render() {
    const { id, afterURL } = this.props;
    const { editing } = this.state;
    console.log(id, afterURL);
    return (
      <div>
        {editing ? (
          <input
            placeholder="URL"
            type="text"
            // value={this.state.afterURL}
            onChange={this.props.handleChange}
            onKeyPress={this.updateEdit}
          />
        ) : (
          <span>{afterURL}</span>
        )}
        <button onClick={() => this.setState({ editing: !editing, afterURL })}>
          x
        </button>
      </div>
    );
  }
}

export default EditURL;
