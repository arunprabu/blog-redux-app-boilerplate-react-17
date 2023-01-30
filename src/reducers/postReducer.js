/* What's a Reducer? 
  * It is a fn that takes in state and an action 
  * Must return state
  * 
*/
// feature reducer

import { ADD_POST } from "../actions/types";

const initialState = {
  isLoading: false,
  isError: false,
  postList: [],
  post: {},
  status: 'idle'
};

const postReducer = (state = initialState, action) => {
  console.log('Inside postReducer');
  console.log(action);
  
  switch(action.type) {
    case ADD_POST:
      const newState = {
        ...state,
        postList: [action.payload],
      };
      return newState;

    default: 
      return state;
  }
};

export default postReducer;