import { all, call, fork, put, takeEvery } from "redux-saga/effects"
import { callApi } from "../../utils/api";
import { fetchError, fetchSuccess } from "./actions";
import { FETCH_REQUEST } from "./types";

const API_ENDPOINT = 'http://jsonplaceholder.typicode.com/posts';

function* handleFetch() {
  debugger;
  try {
    debugger;
    // To call async functions, use redux-saga's `call()`.
    const res = yield call(callApi, 'get', API_ENDPOINT)
    debugger;
    if (res.error) {
      
      yield put(fetchError(res.error))
    } else {
      yield put(fetchSuccess(res))
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchError(err.stack))
    } else {
      yield put(fetchError('An unknown error occured.'))
    }
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchFetchRequest() {
  debugger;
  yield takeEvery(FETCH_REQUEST, handleFetch)
}

function* postsSaga() {
  debugger;
  yield all([
    fork(watchFetchRequest)
  ])
}

export default postsSaga;