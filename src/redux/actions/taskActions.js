import * as types from "./actionTypes";

export const createTask = (task) => {
  return { type: types.CREATE_TASK, task };
};
