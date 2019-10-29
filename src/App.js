import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import ArtPosts from "./pages/art_posts";
import CreatePost from "./pages/create_post";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/art_posts" component={ArtPosts} />
            <Route path="/create_post" component={CreatePost} />
          </Switch>
        </div>
      </Router>
    );
  }
}
