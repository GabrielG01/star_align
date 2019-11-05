import React, { Component } from "react";

import axios from "axios";

export default class DeletePost extends Component {
  constructor(props) {
    super(props);
  }

  deletePost = () => {
    axios
      .delete(`https://star-align-db.herokuapp.com/post/${this.props.id}`)
      .then(response => {
        console.log("response", response);
      })
      .then(alert("Post deleted"));
  };

  render() {
    return (
      <button onClick={this.deletePost} className="btn">
        Delete
      </button>
    );
  }
}
