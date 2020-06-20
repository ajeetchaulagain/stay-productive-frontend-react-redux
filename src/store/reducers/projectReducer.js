import * as types from "../actions/actionTypes";

const projectReducer = (state = [], action) => {
  switch (action.type) {
    case types.CREATE_PROJECT:
      return [...state, { ...action.project }];
    default:
      return state;
  }
};
export default projectReducer;
