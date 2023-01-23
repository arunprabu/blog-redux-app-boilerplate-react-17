// Let's create the reducer 
// What's a reducer? 
// * It is a fn that takes in state and an action. 
// * It must return state 

import { CREATE_ERROR, CREATE_REQUEST, CREATE_SUCCESS, FETCH_ERROR, FETCH_REQUEST, FETCH_REQUEST_BY_ID, FETCH_SUCCESS, UPDATE_REQUEST_BY_ID } from "./types";

const initialState = {
  isLoading: false,
  isError: false,
  status: {},
  postList: [],
  post: {}
};

const postReducer = (state = initialState, action) => {

  switch (action.type) {
    case CREATE_REQUEST:
    case FETCH_REQUEST:
    case FETCH_REQUEST_BY_ID:
    case UPDATE_REQUEST_BY_ID:
      // set isLoading to true
      return {
        ...state,
        isLoading: true,
        isError: false
      };

    case CREATE_SUCCESS:
      // set isLoading to false and also update the state with data fetched from rest api
      // isError to false
      return state;

    case CREATE_ERROR:
      // set isLoading to false and also update the state with isError to true
      return state;

    case FETCH_SUCCESS:
      return state;

    case FETCH_ERROR:
      return state;

    default:
      return state;
  }
};

export default postReducer;