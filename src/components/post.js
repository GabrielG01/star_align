import React, { Component } from "react";
import art from "../images/23011364239_d07d66e290_c.jpg";

class Post extends Component {
  render() {
    return (
      <div className="post">
        <div className="post_image">
          <img src={art} alt="art"></img>
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
