import React, { Component } from 'react'
import { connect } from 'react-redux';
import { ADD_POST } from '../actions/types';

export class PostForm extends Component {

  handleAddPost = (event) => {
    event.preventDefault();
    // console.log('Adding');

    const formData = {
      title: this.titleInput.value,
      body: this.bodyInput.value,
    };
    console.log(formData); // submittable form data
    console.log(this.props);
    // this.props.dispatch({
    //   type: ADD_POST,
    //   payload: formData
    // });
  }

  render() {
    return (
      <div>
        <h3>Create Post!</h3>

        <form className="text-left" onSubmit={this.handleAddPost}>
          <input
            required
            type="text"
            placeholder="Enter Post Title"
            className="form-control"
            ref={(inputEl) => {
              this.titleInput = inputEl;
            }}
          />
          <br />

          <textarea
            required
            rows="5"
            cols="28"
            placeholder="Enter Post"
            className="form-control"
            ref={(textAreaEl) => {
              this.bodyInput = textAreaEl;
            }}
          />
          <br />
          <button className="btn btn-primary" type="submit">
            Add Post
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(PostForm);
