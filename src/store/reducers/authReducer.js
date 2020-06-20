import * as types from "../actions/actionTypes";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.REGISTER_USER_SUCCESS:
      return action.user;
    case types.REGISTER_USER_FAILURE:
      return state;
    default:
      return state;
  }
};

export default authReducer;
