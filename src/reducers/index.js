import { combineReducers } from "redux";
import postReducer from "./postReducer";

// Let's work on to combine multiple feature reducers 
const rootReducer = combineReducers({
  posts: postReducer,
  // you can add many more reducers here
});

export default rootReducer;