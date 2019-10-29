import React, { Component } from "react";

import Header from "../components/header";

class CreatePost extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="art_posts_body">
          <h1>Create Post</h1>
        </div>
      </div>
    );
  }
}

export default CreatePost;
