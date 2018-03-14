import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

import "./App.css";
import Home from "./Home";
import About from "./About";
import Gadgets from "./Gadgets";

class App extends Component {
  render() {
    return (
      <Router className="App">
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/gadgets" component={Gadgets} />
        </AnimatedSwitch>
      </Router>
    );
  }
}

export default App;
