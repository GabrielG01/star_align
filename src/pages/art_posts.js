import React, { Component } from "react";
import Header from "../components/header";
import Post from "../components/post";

class ArtPosts extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="art_posts_body">
          <Post />
        </div>
      </div>
    );
  }
}

export default ArtPosts;
