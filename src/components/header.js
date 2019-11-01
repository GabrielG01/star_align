import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header_play_button">Play Button</div>
        <div className="header_art_posts">
          <NavLink className="drake" exact to="/art_posts">
            Posts
          </NavLink>
        </div>

        <div className="header_create_post">
          <NavLink className="drake" exact to="/create_post">
            Create Post
          </NavLink>
        </div>

        <div className="header_home">
          <NavLink className="header_home drake" exact to="/">
            Home
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
