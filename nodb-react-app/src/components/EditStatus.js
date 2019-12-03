import React, { Component } from "react";
import axios from "axios";
import "./EditStatus.css";

class EditStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: ""
    };

    this.updateStatus = this.updateStatus.bind(this);
  }

  updateStatus(e) {
    axios
      .put(`/api/lists/${this.props.id}`, {
        status: this.state.status
      })
      .then(response => {
        this.props.updateAllRequests(response.data);
        this.setState({ status: this.state.status });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange = event => {
    this.setState({ status: event.target.value });
  };

  render() {
    const { id, status } = this.props;
    // const { editing } = this.state;
    return (
      <div className="Dropdown">
        <select
          className="Dropdown-Items"
          //   placeholder="insert URL + hit Enter"
          type="text"
          // value={this.state.afterURL}
          onChange={this.handleChange}
          onClick={this.updateStatus}
          //   onKeyPress={this.updateEdit}
        >
          {" "}
          Update Status
          <option value={"NEW"}>NEW</option>
          <option value={"IN EDIT"}>IN EDIT</option>
          <option value={"FINISHED"}>FINISHED</option>
        </select>
        {/* <button onClick={this.updateStatus}>confirm</button> */}
        {/* <button onClick={() => this.setState({ editing: !editing, afterURL })}>
          x
        </button> */}
      </div>
    );
  }
}

export default EditStatus;
