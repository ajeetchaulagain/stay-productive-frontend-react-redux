import * as types from "../actions/actionTypes";

const taskReducer = (state = [], action) => {
  switch (action.type) {
    case types.CREATE_TASK:
      return [...state, { ...action.task }];
    default:
      return state;
  }
};

export default taskReducer;
