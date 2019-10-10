import React, { Component } from "react";
import Edit from "./Edit";
import axios from "axios";

class ViewRequests extends Component {
  constructor() {
    super();
    this.state = {
      allRequests: []
    };
  }

  updateAllRequests = newArr => {
    this.setState({ allRequests: newArr });
  };

  componentDidMount() {
    axios
      .get("/api/list")
      .then(response => {
        console.log(response.data);
        this.setState({ allRequests: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let mappedEditList = this.state.allRequests.map(element => {
      return (
        <Edit element={element} updateAllRequests={this.updateAllRequests} />
      );
    });
    return (
      <div>
        <h1>VIEW REQUESTS</h1>
        {mappedEditList}
      </div>
    );
  }
}

export default ViewRequests;
