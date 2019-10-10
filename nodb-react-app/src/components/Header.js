import React, { Component } from "react";
import "./Header.css";
import Logo from "../images/Mosaic-Logo.png";

class Header extends Component {
  render() {
    return (
      <header className="Main">
        <img className="Logo" src={Logo} />
      </header>
    );
  }
}

export default Header;
