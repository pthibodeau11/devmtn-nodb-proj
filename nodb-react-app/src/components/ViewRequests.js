import React, { Component } from "react";
import axios from "axios";

class ViewRequests extends Component {
  constructor() {
    super();
    this.state = {
      allRequests: []
    };
  }

  render() {
    return (
      <div>
        <h1>VIEW REQUESTS</h1>
      </div>
    );
  }
}

export default ViewRequests;
