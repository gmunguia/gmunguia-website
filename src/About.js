import React, { Component } from "react";
import Markdown from "react-markdown";
import "./About.css";
import Back from "./Back";
import { body as resume } from "../resume/resume.mjs";

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="About__container">
          <header className="About__header">
            <Back />
            <h1>About</h1>
          </header>
          <main>
            <Markdown source={resume} />
          </main>
        </div>
      </div>
    );
  }
}

export default About;
