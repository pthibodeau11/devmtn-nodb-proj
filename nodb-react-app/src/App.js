import React, { Component } from "react";
import Header from "./components/Header";
import NewRequest from "./components/NewRequest";
import ViewRequests from "./components/ViewRequests";
import Edit from "./components/Edit";
import Footer from "./components/Footer";
import "./App.css";
import { Scrollbars } from "react-custom-scrollbars";
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
          <button
            className="Button"
            onClick={() => this.setState({ currentPage: "submit" })}
          >
            NEW REQUEST
          </button>
          <button
            className="Button"
            onClick={() => this.setState({ currentPage: "list" })}
          >
            VIEW EDIT LIST
          </button>
          <button
            className="Button"
            onClick={() => this.setState({ currentPage: "edit" })}
          >
            EDIT PHOTO
          </button>
        </nav>
        {/* <Scrollbars style={{ width: 500, height: 300 }}> */}
        <main className="Body">
          {this.state.currentPage === "submit" ? (
            <NewRequest />
          ) : this.state.currentPage === "list" ? (
            <ViewRequests />
          ) : this.state.currentPage === "edit" ? (
            <Edit />
          ) : null}
        </main>
        {/* </Scrollbars> */}
        <div className="Footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
