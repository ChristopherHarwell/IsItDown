import {
  FETCH_STATUS_TEXT_START, // change this to your action
  FETCH_STATUS_TEXT_SUCCESS, // change this to your action
  FETCH_STATUS_TEXT_FAILURE // change this to your action
} from "../components/actions";

const initialState = {
  webpageState: [{
    id: "",
    statusCode: "",
    statusText: "",
    isDown: false,
    returnedUrl: "",
    requestedDomain: ""
  }], // change this property to your inital state and value for that state
  error: "",
  isFetching: false
};

function reducer(state = initialState, action) {
  switch (action.type) {

    // Status Text
    case FETCH_STATUS_TEXT_START: // change this to your action
      return {
        ...state,
        isFetching: true //boolean to tell the app we are currently fetching data from the API
      };
    case FETCH_STATUS_TEXT_SUCCESS: // change this to your action
      return {
        ...state,
        error: "",
        isFetching: false,
        webpageState: action.payload // change this property to your state property
      };
    case FETCH_STATUS_TEXT_FAILURE: // change this to your action
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

      // Status Code
    case FETCH_STATUS_CODE_START: // change this to your action
      return {
        ...state,
        isFetching: true //boolean to tell the app we are currently fetching data from the API
      };
    case FETCH_STATUS_CODE_SUCCESS: // change this to your action
      return {
        ...state,
        error: "",
        isFetching: false,
        webpageState: action.payload // change this property to your state property
      };
    case FETCH_STATUS_CODE_FAILURE: // change this to your action
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
}

export default reducer;
