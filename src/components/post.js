import React, { Component } from "react";

class Post extends Component {
  render() {
    return (
      <div className="post">
        <div className="post_image"></div>
        <div className="post_title">
          <h1>epic title</h1>
        </div>
        <div className="post_description">
          <p>Supa supa awesome description for epic awesome art piece</p>
        </div>
      </div>
    );
  }
}

export default Post;
