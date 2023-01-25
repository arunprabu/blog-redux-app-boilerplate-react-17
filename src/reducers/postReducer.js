/* What's a Reducer? 
  * It is a fn that takes in state and an action 
  * Must return state
  * 
*/
// feature reducer

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
  return state;
};

export default postReducer;