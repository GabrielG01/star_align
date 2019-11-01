import React, { Component } from "react";
import axios from "axios";
// import art from "../images/23011364239_d07d66e290_c.jpg";

class Post extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      isLoading: true
    };

    this.renderPosts = this.renderPosts.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://star-align-db.herokuapp.com/posts")
      .then(response => {
        this.setState({
          posts: response.data
        });
        console.log(this.state.posts);
      })
      .then(() => {
        this.setState({
          isLoading: false
        });
      });
  }

  renderPosts() {
    return this.state.posts.map(post => {
      return (
        <div className="post">
          <div className="post_image">
            <img src="https://source.unsplash.com/random" alt="art" />
          </div>
          <div className="post_text_fields">
            <div className="post_title">{post.title}</div>
            <div className="post_description">
              <p>{post.description}</p>
            </div>
          </div>

          {this.state.isLoading ? (
            <div className="content-loader">
              <h1>Gathering posts...</h1>
            </div>
          ) : null}
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderPosts()}</div>;
  }
}

export default Post;
