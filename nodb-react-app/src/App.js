import React, { Component } from "react";
import Header from "./components/Header";
import NewRequest from "./components/NewRequest";
import ViewRequests from "./components/ViewRequests";
import Edit from "./components/Edit";
import Footer from "./components/Footer";
import "./App.css";
import { thisTypeAnnotation } from "@babel/types";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: ""
    };
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <Header />
        </div>
        <nav className="Nav">
          <button onClick={() => this.setState({ currentPage: "submit" })}>
            Make New Request
          </button>
          <button onClick={() => this.setState({ currentPage: "list" })}>
            View Edit List
          </button>
          <button onClick={() => this.setState({ currentPage: "edit" })}>
            Edit Photo
          </button>
        </nav>
        <main className="Body">
          {this.state.currentPage === "submit" ? (
            <NewRequest />
          ) : this.state.currentPage === "list" ? (
            <ViewRequests />
          ) : this.state.currentPage === "edit" ? (
            <Edit />
          ) : null}
        </main>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
