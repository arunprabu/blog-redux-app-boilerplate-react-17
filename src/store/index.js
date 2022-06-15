import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import postsSaga from './posts/sagas';
import postsReducer  from './posts/reducer'

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const createRootReducer = () => 
  combineReducers({
    posts: postsReducer,   //error here
  })


export function* rootSaga() {
  yield all(
    [
      fork(postsSaga),
      // another feature's saga will come here
    ]
  )
}
