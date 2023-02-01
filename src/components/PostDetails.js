import React, { useEffect } from "react";
// try useDispatch to dispatch with getPostById(postId)
// try useSelector to subscribe to store data
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  let { postId } = useParams();
  console.log(postId);

  useEffect(() => {});

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">post title by user id: 1</h5>
        <h6 className="card-subtitle mb-2 text-muted">post id: 1</h6>
        <p className="card-text">post body</p>

        <div>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Edit
          </button>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Modal title
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">have form with two fields</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
