import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class PostList extends Component {

  componentDidMount() {
    console.log(this.props);
    this.props.dispatch({
      type: 'GET_POSTS'
    });
  }

  render() {

    return (
      <div>
        <h3>Post List</h3>
        <div className="list-group text-left">
          <div className="list-group-item list-group-item-action text-start">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">
                <Link to={`/posts/1`}>post 1</Link>
              </h5>
              <small>Post Id: 1</small>
            </div>
            <p className="mb-1 text-left">sample post</p>
          </div>

          <div className='alert alert-warning'>
            No Posts Found. You can add one!
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(PostList);
// store has dispatch fn and also getState fn 
// the moment we call connect() -- dispatch fn will be available as part of props of PostList Comp 