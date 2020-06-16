import * as types from "./actionTypes";

export const createProject = (project) => {
  
  return { type: types.CREATE_PROJECT, project };
};
