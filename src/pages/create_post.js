import React, { Component } from "react";

import Header from "../components/header";

class CreatePost extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="art_posts_body">
          <h1>Create Post</h1>
          <form>
            <textarea></textarea>
            <select></select>
            <textarea></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreatePost;
