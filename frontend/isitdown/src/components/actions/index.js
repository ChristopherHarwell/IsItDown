import axios from "axios";

export const FETCH_STATUS_TEXT_START = "FETCH_START";  // change this to your action
export const FETCH_STATUS_TEXT_SUCCESS = "FETCH_SUCCESS";  // change this to your action
export const FETCH_STATUS_TEXT_FAILURE = "FETCH_FAILURE";  // change this to your action

export const getStatusText = () => dispatch => {
  // the dispatch function is the thunk
  dispatch({ type: FETCH_STATUS_TEXT_START });  // change this to your action
  axios
    .get("https://ghibliapi.herokuapp.com/films/")
    .then(res => {
      /* whatever you want to do with the response */
      dispatch({ type: FETCH_STATUS_TEXT_SUCCESS,  // change this to your action
        payload: res.data }); // add the rest of the payload after res.data like res.data.results
    })
    .catch(err => {
      /* whatever ypu wamt to do with the error */
      dispatch({ type: FETCH_STATUS_TEXT_FAILURE,  // change this to your action
         payload: err.response.message }); // add the rest of the payload after err.response like err.response.data
    });
};

export const getStatusCode = () => dispatch => {
  // the dispatch function is the thunk
  dispatch({ type: FETCH_STATUS_CODE_START });  // change this to your action
  axios
    .get("https://ghibliapi.herokuapp.com/films/")
    .then(res => {
      /* whatever you want to do with the response */
      dispatch({ type: FETCH_STATUS_CODE_SUCCESS,  // change this to your action
        payload: res.data }); // add the rest of the payload after res.data like res.data.results
    })
    .catch(err => {
      /* whatever ypu wamt to do with the error */
      dispatch({ type: FETCH_STATUS_CODE_FAILURE,  // change this to your action
         payload: err.response.message }); // add the rest of the payload after err.response like err.response.data
    });
};
