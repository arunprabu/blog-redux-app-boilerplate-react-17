import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from './types';

export const fetchRequest = () => {
  debugger;
  return { 
    type: FETCH_REQUEST
  }
}

// Remember, you can also pass parameters into an action creator. Make sure to
// type them properly as well.
export const fetchSuccess = (data) => {
  return {
    type: FETCH_SUCCESS, 
    payload: data
  }
}
export const fetchError = (message) => {
  return {
    type: FETCH_ERROR, 
    payload: message
  }
}