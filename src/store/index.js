import { combineReducers } from "redux";
import postReducer from "./posts/reducer";

// We need to combine all reducers 
export const createRootReducer = () => {
  const rootReducer = combineReducers({
    posts: postReducer
  });
  return rootReducer;
}

