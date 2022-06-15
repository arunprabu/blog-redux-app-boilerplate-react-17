import { CREATE_REQUEST, CREATE_SUCCESS, FETCH_REQUEST, FETCH_REQUEST_BY_ID, FETCH_SUCCESS, UPDATE_REQUEST_BY_ID } from "./types";

const initialState = {
  postList: [],
  post: undefined,
  errors: undefined,
  loading: false,
  status: undefined
}


const postReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case CREATE_REQUEST:
    case FETCH_REQUEST:
    case FETCH_REQUEST_BY_ID:
    case UPDATE_REQUEST_BY_ID:
      return { ...state, loading: true }

    case CREATE_SUCCESS:
      return state; 

    case FETCH_SUCCESS: 
      return { ...state, loading: false, postList: action.payload }
      
    default: 
      return state;
  }
}

export default postReducer;