import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="title">
          <h1 className="title__name">Gmungia</h1>
          <h2 className="title__description">
            zen, millenial<br />web developer
          </h2>
        </div>
        <nav className="navbar">
          <ul className="menu">
            <li className="menu__item">
              <Link to="about">About</Link>
            </li>
            <li className="menu__item">
              <a href="https://github.com/gmunguia">Work</a>
            </li>
            <li className="menu__item">
              <Link to="/gadgets">Gadgets</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Home;
