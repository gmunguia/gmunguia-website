import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Back.css";

class Back extends Component {
  render() {
    return (
      <nav>
        <Link className="Back__link" to="/" />
      </nav>
    );
  }
}

export default Back;
