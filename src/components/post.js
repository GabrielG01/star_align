import React, { Component } from "react";

class Post extends Component {
  render() {
    return (
      <div className="post">
        <div className="post_image">
          <h1>Image goes here</h1>
        </div>
        <div className="post_text_fields">
          <div className="post_title">
            <h1>epic title</h1>
          </div>
          <div className="post_description">
            <p>Supa supa awesome description for epic awesome art piece</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
