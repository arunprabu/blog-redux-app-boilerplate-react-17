/* Let's have all possible action types specific to posts feature */ 

// Define whatever naming conventions you'd like for your action types,
// but personally I use @@context/ACTION_TYPE' convention 

// create 
export const CREATE_REQUEST = '@@posts/CREATE_REQUEST'; // for creating a post 
export const CREATE_SUCCESS = '@@posts/CREATE_SUCCESS'; // for post creation success
export const CREATE_ERROR = '@@posts/CREATE_ERROR'; // for post creation error

// read
export const FETCH_REQUEST = '@@posts/FETCH_REQUEST'; // for getting all posts 
export const FETCH_SUCCESS = "@@posts/FETCH_SUCCESS"; // for getting all posts success
export const FETCH_ERROR = "@@posts/FETCH_ERROR"; // for getting all posts error

// read
export const FETCH_REQUEST_BY_ID = "@@posts/FETCH_REQUEST_BY_ID"; // for getting post by id
export const FETCH_SUCCESS_BY_ID = "@@posts/FETCH_SUCCESS_BY_ID"; // for getting post by id success
export const FETCH_ERROR_BY_ID = "@@posts/FETCH_ERROR_BY_ID"; // for getting post by id error

// update 
export const UPDATE_REQUEST_BY_ID = "@@posts/UPDATE_REQUEST_BY_ID"; // for updating post by id
export const UPDATE_SUCCESS_BY_ID = "@@posts/UPDATE_SUCCESS_BY_ID"; // for updating post by id success
export const UPDATE_ERROR_BY_ID = "@@posts/UPDATE_ERROR_BY_ID"; // for updating post by id error

// TODO: Have the actions for Delete