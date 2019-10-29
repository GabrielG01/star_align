import React, { Component } from "react";

import Header from "../components/header";

class ArtPosts extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="art_posts_body">
          <h1>Art Posts</h1>
        </div>
      </div>
    );
  }
}

export default ArtPosts;
