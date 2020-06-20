import * as types from "./actionTypes";

const action = {
  type: "API_CALL_START",
  payload: {
    url: "/projects",
    mnethod: "get",
    data: {},
    onSuccess: "PROJECT_LOADED",
    onError: "API_REQUEST_FAILED",
  },
};

export const loadProject = () => {
  return { type: "API_CALL_START", payload: action.payload };
};

export const createProject = (project) => {
  return { type: types.CREATE_PROJECT, project };
};
