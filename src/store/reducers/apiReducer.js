import * as types from "../actions/actionTypes";

const apiReducer = (state = {}, action) => {
  switch (action.type) {
    case types.API_CALL_START:
      return {};

    case types.API_CALL_FAILURE:
      return action.error;

    case types.CLEAR_API_ERRORS:
      return {};
    default:
      return state;
  }
};

export default apiReducer;
