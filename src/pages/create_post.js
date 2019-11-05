import React, { Component } from "react";
import axios from "axios";

import Header from "../components/header";

export default class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      post_type: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://star-align-db.herokuapp.com/post", {
        title: this.state.title,
        description: this.state.description,
        post_type: this.state.post_type
      })
      .then(response => {
        this.setState({
          title: "",
          description: "",
          post_type: ""
        });
      })
      .then(() => {
        alert("Art successfully uploaded!");
      });
  }

  render() {
    return (
      <div>
        <Header />
        <form onSubmit={this.handleSubmit} className="create_post_wrapper">
          <div className="create_post_fields">
            <div className="top-row">
              <input
                className="create_post_title"
                type="text"
                onChange={this.handleChange}
                name="title"
                placeholder="Post Title"
                value={this.state.title}
              />
              <select
                className="create_post_type"
                type="text"
                onChange={this.handleChange}
                name="post_type"
                placeholder="Type of post"
                value={this.state.post_type}
              >
                <option value="Painting">Painting</option>
                <option value="Drawing">Drawing</option>
                <option value="Film">Film</option>
                <option value="Music">Music</option>
              </select>
            </div>
            <input
              className="create_post_description"
              type="text"
              onChange={this.handleChange}
              name="description"
              placeholder="Post Description"
              value={this.state.description}
            />
          </div>

          <button className="btn">Upload</button>
        </form>
      </div>
    );
  }
}
