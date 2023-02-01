import React, { useEffect } from "react";
// try useDispatch to dispatch with getPostById(postId)
// try useSelector to subscribe to store data
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  // what's the api url? https://jsonplaceholder.typicode.com/posts/10
  let { postId } = useParams();
  console.log(postId);

  useEffect(() => {});

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">post title by user id: 1</h5>
        <h6 className="card-subtitle mb-2 text-muted">post id: 1</h6>
        <p className="card-text">post body</p>
      </div>
    </div>
  );
};

export default PostDetails;
