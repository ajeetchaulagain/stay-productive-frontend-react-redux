import * as types from "./actionTypes";

import { apiAction } from "./apiActions";

export const loadProjects = () => {
  return (dispatch) => {
    dispatch({ type: types.LOAD_PROJECTS });
    dispatch(
      apiAction({
        url: "/projects",

        onSuccess: types.LOAD_PROJECTS_SUCCESS,
        onError: types.LOAD_PROJECTS_FAILURE,
      })
    );
  };
};

export const saveProject = (project) => {
  return (dispatch) => {
    dispatch({ type: types.SAVE_PROJECT, payload: project });
    dispatch(
      apiAction({
        url: "/projects",
        method: "POST",
        data: project,
        onSuccess: types.SAVE_PROJECT_SUCCESS,
        onError: types.SAVE_PROJECT_FAILURE,
      })
    );
  };
};

export const createProject = (project) => {
  return { type: types.CREATE_PROJECT, project };
};
