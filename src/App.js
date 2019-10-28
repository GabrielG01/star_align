import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";

import "./App.css";
import logo from "./logo.svg";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <Home />
            <Switch></Switch>
          </div>
        </Router>
      </div>
    );
  }
}
