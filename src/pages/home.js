import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/8fce4766-f93f-4fd5-a765-eb1112d855ac_200x200.png";
import Cookie from "js-cookie";

export default class Home extends Component {
  constructor() {
    super();

    this.setState = {
      username: "",
      password: "",
      loggedIn: false
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
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

  render() {
    return (
      <body className="home_body">
        <div className="home_middle_column">
          <div className="home_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="home_description">
            <p>
              A space for artists to post and share their work, completely free.
            </p>
          </div>
          <div className="login">
            {Cookie.get("USERNAME") && Cookie.get("PASSWORD") ? (
              <div>
                {Cookie.get("USERNAME")}
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
                  onChange={event => {
                    this.handleUsername(event);
                  }}
                  type="text"
                  placeholder="Username"
                ></input>
                <input
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
          <NavLink exact to="/art_posts" className="home_enter">
            Enter
          </NavLink>
        </div>
      </body>
    );
  }
}
