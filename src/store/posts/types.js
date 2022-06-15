// Define however naming conventions you'd like for your action types, but
// personally, I use the `@@context/ACTION_TYPE` convention, to follow the convention
// of Redux's `@@INIT` action.
export const CREATE_REQUEST = '@@posts/CREATE_REQUEST';  // for create post
export const CREATE_SUCCESS = '@@posts/CREATE_SUCCESS';   // // for create post - success
export const CREATE_ERROR = '@@posts/CREATE_ERROR';   // // for create post - error

export const FETCH_REQUEST = '@@posts/FETCH_REQUEST';  // for get all posts
export const FETCH_SUCCESS = '@@posts/FETCH_SUCCESS';  // for get all posts success
export const FETCH_ERROR = '@@posts/FETCH_ERROR';      // for post related errors

export const FETCH_REQUEST_BY_ID = '@@posts/FETCH_REQUEST_BY_ID';   // for get post by id 
export const FETCH_SUCCESS_BY_ID = '@@posts/FETCH_SUCCESS_BY_ID';   // for get post by id - success 
export const UPDATE_REQUEST_BY_ID = '@@posts/UPDATE_REQUEST_BY_ID';  // for update post by id
export const UPDATE_SUCCESS_BY_ID = '@@posts/UPDATE_SUCCESS_BY_ID'   // // for update post by id - success
