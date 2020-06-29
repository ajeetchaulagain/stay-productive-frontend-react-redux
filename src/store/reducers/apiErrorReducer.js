import * as types from "../actions/actionTypes";

// This reducer will handle state changes of error object if there
// are any errors while calling API endpoint

const apiErrorReducer = (state = {}, action) => {
  switch (action.type) {
    // Here, I am trying to reset the error object before
    // every api call start
    case types.API_CALL_START:
      return {};

    case types.API_CALL_FAILURE:
      return action.error;

    default:
      return state;
  }
};

export default apiErrorReducer;
