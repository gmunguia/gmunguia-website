import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div className="About">
        <Link to="home">{"<-"}</Link>
        About
      </div>
    );
  }
}

export default About;
