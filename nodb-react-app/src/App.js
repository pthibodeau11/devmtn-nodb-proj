import React, { Component } from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import NewRequest from "./components/NewRequest";
import ViewRequests from "./components/ViewRequests";
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
            onClick={() => this.setState({ currentPage: "gallery" })}
          >
            PHOTO GALLERY
          </button>
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
        </nav>
        <main className="Body">
          <Scrollbars style={{ width: 1150, height: 675 }}>
            {this.state.currentPage === "submit" ? (
              <NewRequest />
            ) : this.state.currentPage === "list" ? (
              <ViewRequests />
            ) : this.state.currentPage === "gallery" ? (
              <Gallery />
            ) : null}
          </Scrollbars>
        </main>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
