import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class PostList extends Component {

  render() {
    console.log(this.props);

    if(this.props.posts.isLoading){
      return(
        <div className='spinner-border text-success'></div>
      )
    }

    if (this.props.posts.isError) {
      return (
        <div className="alert alert-danger">
          Some error occured try again later
        </div>
      );
    }

    return (
      <div>
        <h3>Post List</h3>
        {
          this.props.posts.postList?.map( (post) => {
            return (
              <div className="list-group text-left" key={post.id}>
                <div className="list-group-item list-group-item-action text-start">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">
                      <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </h5>
                    <small>Post Id: {post.id}</small>
                  </div>
                  <p className="mb-1 text-left">{post.body}</p>
                </div>
              </div>
            );
          })

        }
        
      </div>
    )
  }
}

// subscribing to store data
// will convert the store data into props which will be read-only
const mapStateToProps = ({posts}) => { // store data
  console.log(posts);
  return {
    posts
  }
}

export default connect(mapStateToProps)(PostList);
// store has dispatch fn and also getState fn 
// the moment we call connect() -- dispatch fn will be available as part of props of PostList Comp 
// to get store data you need one function 'mapStateToProps' 