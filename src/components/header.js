import React, { Component } from "react";
import Cookie from "js-cookie";
import PlayButton from "./play_button";

import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      loggedIn: false
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();
    Cookie.set("USERNAME", this.state.username, { expires: 3 });
    Cookie.set("PASSWORD", this.state.password, { expires: 3 });
    this.setState({
      loggedIn: true
    });
  }

  handleUsername(event) {
    this.setState({
      username: event.target.value
    });
    console.log(this.state.username);
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value
    });
    console.log(this.state.password);
  }

  handleLogout() {
    Cookie.remove("USERNAME");
    Cookie.remove("PASSWORD");
    this.setState({
      username: "",
      password: ""
    });
  }

  render() {
    return (
      <div className="header">
        <div className="header_home">
          <NavLink className="header_home drake" exact to="/">
            Home
          </NavLink>
        </div>

        <PlayButton />

        <div className="header_art_posts">
          <NavLink className="drake" exact to="/art_posts">
            Posts
          </NavLink>
        </div>
        {Cookie.get("USERNAME") && Cookie.get("PASSWORD") ? (
          <div className="header_create_post">
            <NavLink className="drake" exact to="/create_post">
              Create Post
            </NavLink>
          </div>
        ) : null}
        <div className="log-in">
          {Cookie.get("USERNAME") && Cookie.get("PASSWORD") ? (
            <div className="header_login">
              <p className="header_username">
                Welcome, {Cookie.get("USERNAME")}!
              </p>

              <button
                className="log-button"
                onClick={() => {
                  this.handleLogout();
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              <input
                className="header_input"
                onChange={event => {
                  this.handleUsername(event);
                }}
                type="text"
                placeholder="Username"
              ></input>
              <input
                className="header_input"
                onChange={event => {
                  this.handlePassword(event);
                }}
                type="password"
                placeholder="Password"
              ></input>
              <button
                className="log-button"
                onClick={event => {
                  this.handleLogin(event);
                }}
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
