import axios from "axios";
import { ADD_POST_SUCCESS, ADD_POST_LOADING, ADD_POST_ERROR } from "../actions/types";

const POST_API_URL = "https://jsonplaceholder.typicode.com/posts";

export const createPost = (formData) => { // receiving form data
  return (dispatch) => {
    // AJAX call to add a post
    dispatch({
      type: ADD_POST_LOADING
    });

    return axios
      .post(POST_API_URL, formData)
      .then((res) => {
        console.log(res.data);
        // dispatch the above data to the reducer
        dispatch({
          type: ADD_POST_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        // dispatch the above error to the reducer
        dispatch({
          type: ADD_POST_ERROR,
          payload: err,
        });
      });
  }
}

