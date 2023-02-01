/* What's a Reducer? 
  * It is a fn that takes in state and an action 
  * Must return state
  * 
*/
// feature reducer

import { ADD_POST_ERROR, ADD_POST_LOADING, ADD_POST_SUCCESS, GET_POSTS_LOADING, GET_POSTS_SUCCESS, GET_POST_BY_ID_LOADING, GET_POST_BY_ID_SUCCESS } from "../actions/types";

const initialState = {
  isLoading: false,
  isError: false,
  postList: [],
  post: {},
  status: 'idle'
};

const postReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST_LOADING:
    case GET_POSTS_LOADING:
    case GET_POST_BY_ID_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case ADD_POST_SUCCESS:
      console.log(state);
      return {
        ...state,
        isLoading: false,
        isError: false,
        postList: [...state.postList, action.payload],
      };

    case ADD_POST_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case GET_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        postList: action.payload,
      };

    case GET_POST_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        post: action.payload
      };

    default:
      return state;
  }
};

export default postReducer;