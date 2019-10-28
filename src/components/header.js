import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Home from "../pages/home";
import ArtPosts from "../pages/art_posts";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header_home">
          <NavLink exact to="/">
            Home
          </NavLink>
        </div>
        <div className="header_art_posts">
          <NavLink exact to="/art_posts">
            Posts
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
