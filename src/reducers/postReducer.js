/* What's a Reducer? 
  * It is a fn that takes in state and an action 
  * Must return state
  * 
*/
// feature reducer

import { ADD_POST, ADD_POST_ERROR, ADD_POST_LOADING, ADD_POST_SUCCESS } from "../actions/types";

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
        isError: true
      };

    default:
      return state;
  }
};

export default postReducer;