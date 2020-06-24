import axios from "axios";
const API_URL = process.env.API_URL;

import * as types from "../actions/actionTypes";

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type != "API_CALL_START") return next(action);
  next(action);

  const { url, method, onSuccess, onError, data } = action.payload;

  axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");

  try {
    const response = await axios.request({
      baseURL: API_URL,
      url,
      method,
      data,
    });
    dispatch({ type: types.API_CALL_SUCCESS });
    dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    dispatch({ type: types.API_CALL_FAILURE });
    if (error.response) {
      dispatch({ type: onError, payload: error.response.data });
    } else if (error.request) {
      console.log("error response", error.request);
      dispatch({ type: onError, payload: "Unexpected Error Occurred" });
    }
  }
};

export default api;
