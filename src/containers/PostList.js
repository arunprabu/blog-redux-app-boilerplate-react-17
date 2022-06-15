import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRequest } from '../store/posts/actions';

export class PostList extends Component {

  componentDidMount() {
    console.log(this.props);
    const { fetchRequest } = this.props;
    fetchRequest()
  }

  render() {
    console.log(this.props); 
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

const mapStateToProps = ({ posts }) => {
  console.log(posts);
  return {
    loading: posts.loading,
    errors: posts.errors,
    postList: posts.postList
  }
}

// mapDispatchToProps is especially useful for constraining our actions to the connected component.
// You can access these via `this.props`.
const mapDispatchToProps = {
  fetchRequest
}


export default connect(mapStateToProps, mapDispatchToProps)(PostList);