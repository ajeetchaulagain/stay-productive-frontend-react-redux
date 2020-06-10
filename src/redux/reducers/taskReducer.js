import * as types from "../actions/actionTypes";

const courseReducer = (state = [], action) => {
  switch (action.type) {
    case types.CREATE_TASK:
      return [...state, { ...action.task }];
    default:
      return state;
  }
};

export default courseReducer;
