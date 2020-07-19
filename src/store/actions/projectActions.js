import * as types from "./actionTypes";

import { apiAction } from "./apiActions";

// Loading project
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

// Action Dispatcher for deleting project through API
export const deleteProject = (project) => {
  return (dispatch) => {
    dispatch({ type: types.DELETE_PROJECT, payload: project });
    dispatch(
      apiAction({
        url: `/projects/${project._id}`,
        method: "DELETE",
        onSuccess: types.DELETE_PROJECT_SUCCESS,
        onError: types.DELETE_PROJECT_FAILURE,
        optimistic: true,
        optimisticRevertValue: project,
      })
    );
  };
};

export const updateProject = (project) => {
  const project_id = project._id;

  return (dispatch) => {
    dispatch({ type: types.UPDATE_PROJECT, payload: project });
    delete project._id;
    dispatch(
      apiAction({
        url: `/projects/${project_id}`,
        method: "PUT",
        data: project,
        onSuccess: types.UPDATE_PROJECT_SUCCESS,
        onError: types.UPDATE_PROJECT_FAILURE,
      })
    );
  };
};
