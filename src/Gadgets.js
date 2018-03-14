import React, { Component } from "react";
import { Link } from "react-router-dom";

class Gadgets extends Component {
  render() {
    return (
      <div className="Gadgets">
        <Link to="home">{"<-"}</Link>
        Gadgets
      </div>
    );
  }
}

export default Gadgets;
