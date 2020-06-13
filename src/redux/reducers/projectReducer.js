import * as types from "../actions/actionTypes";

const projectReducer = (state = [], action) => {
  debugger;
  switch (action.type) {
    case types.CREATE_PROJECT:
      return [...state, { ...action.task }];
    default:
      return state;
  }
};
export default projectReducer;
