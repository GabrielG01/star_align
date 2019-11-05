import React, { Component } from "react";
import axios from "axios";
import DeletePost from "./delete_post";
import Cookie from "js-cookie";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class Post extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      isLoading: true,
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderPosts = this.renderPosts.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
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
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2>{post.title}</h2>
            <button className="btn" onClick={this.closeModal}>
              X
            </button>
            <img
              className="modal_image"
              onClick={this.openModal}
              src="https://source.unsplash.com/random"
              alt="art"
            />
          </Modal>
          {this.state.isLoading ? (
            <div className="content-loader">
              <h1>Gathering posts...</h1>
            </div>
          ) : null}
          <div className="post_image">
            <img
              onClick={this.openModal}
              src="https://source.unsplash.com/random"
              alt="art"
            />
          </div>

          <div className="post_text_fields">
            <div className="post_title">
              <h1>{post.title}</h1>
            </div>

            <div className="post_description">
              <p>{post.description}</p>
            </div>
          </div>

          <div className="post_type">
            <h2>{post.post_type}</h2>
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
