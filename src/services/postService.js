import axios from "axios";
import {
  ADD_POST_SUCCESS,
  ADD_POST_LOADING,
  ADD_POST_ERROR,
  GET_POSTS_LOADING,
  GET_POSTS_ERROR,
  GET_POSTS_SUCCESS,
  GET_POST_BY_ID_LOADING,
  GET_POST_BY_ID_SUCCESS,
  GET_POST_BY_ID_ERROR,
} from "../actions/types";

const POST_API_URL = "https://jsonplaceholder.typicode.com/posts";

export const createPost = (formData) => {
  // receiving form data
  return (dispatch) => {
    // AJAX call to add a post
    dispatch({
      type: ADD_POST_LOADING,
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
  };
};

export const getPosts = () => {
  return (dispatch) => {
    // AJAX call to get posts
    dispatch({
      type: GET_POSTS_LOADING,
    });

    return axios
      .get(POST_API_URL)
      .then((res) => {
        console.log(res.data);
        // dispatch the above data to the reducer
        dispatch({
          type: GET_POSTS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        // dispatch the above error to the reducer
        dispatch({
          type: GET_POSTS_ERROR,
          payload: err,
        });
      });
  };
};

export const getPostById = (postId) => {
  return (dispatch) => {
    // AJAX call to get posts
    dispatch({
      type: GET_POST_BY_ID_LOADING,
    });

    return axios
      .get(POST_API_URL+'/'+postId)
      .then((res) => {
        console.log(res.data);
        // dispatch the above data to the reducer
        dispatch({
          type: GET_POST_BY_ID_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        // dispatch the above error to the reducer
        dispatch({
          type: GET_POST_BY_ID_ERROR,
          payload: err,
        });
      });
  };
}

