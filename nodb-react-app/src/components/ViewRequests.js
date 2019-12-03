import React, { Component } from "react";
import Edit from "./Edit";
import "./ViewRequests.css";
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
        <h1 className="Step-3">STEP 3:</h1>
        <h2 className="Sit-Back">SIT BACK AND RELAX!</h2>
        <h3 className="Rest">(We'll take it from here)</h3>
        <div className="RequestList">{mappedEditList}</div>
      </div>
    );
  }
}

export default ViewRequests;
