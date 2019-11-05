import React, { Component } from "react";
import axios from "axios";
import DeletePost from "./delete_post";
import Cookie from "js-cookie";
import Loader from "react-loader-spinner";

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
      })
      .then(
        this.setState({
          isLoading: false
        })
      );
  }

  renderPosts() {
    return this.state.posts.map(post => {
      return (
        <div className="post">
          {this.state.isLoading ? (
            <div className="content-loader">
              <h1>Gathering posts...</h1>
            </div>
          ) : null}
          <div className="post_image">
            <img src="https://source.unsplash.com/random" alt="art" />
          </div>

          <div className="post_text_fields">
            <div className="post_title">{post.title}</div>

            <div className="post_description">
              <p>{post.description}</p>
            </div>
          </div>

          <div className="post_type">
            <p>{post.post_type}</p>
          </div>
          {Cookie.get("USERNAME") && Cookie.get("PASSWORD") ? (
            <DeletePost id={post.id} />
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
