import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="About__container">
          <header className="About__header">
            <nav className="About__back">
              <Link to="/">{"↜"}</Link>
            </nav>
            <h1>About</h1>
          </header>
          <main>
            <p>
              I&apos;m a young, talented developer, enjoying the quiet peace in
              northern Spain.
            </p>
            <p>
              More info in{" "}
              <a href="https://www.linkedin.com/in/gerardomunguiahoyo/">
                {" "}
                my linkedin profile
              </a>
            </p>
          </main>
        </div>
      </div>
    );
  }
}

export default About;
