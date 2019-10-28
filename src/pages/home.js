import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/8fce4766-f93f-4fd5-a765-eb1112d855ac_200x200.png";

export default class Home extends Component {
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
          <NavLink exact to="/art_posts" className="home_enter">
            Enter
          </NavLink>
        </div>
      </body>
    );
  }
}
