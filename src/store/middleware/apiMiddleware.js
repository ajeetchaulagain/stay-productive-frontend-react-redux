import axios from "axios";
const API_URL = process.env.API_URL;

import * as types from "../actions/actionTypes";

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type != "API_CALL_START") return next(action);

  next(action);

  const {
    url,
    method,
    onSuccess,
    onError,
    onStart,
    data,
    optimisticRevertValue,
  } = action.payload;

  if (onStart) dispatch({ type: onStart });

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
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedError) {
      dispatch({
        type: types.API_CALL_FAILURE,
        error: {
          code: error.response ? error.response.status : null,
          message: "Oops Unexpected Error Occurred",
        },
      });
      dispatch({
        type: onError,
        payload: optimisticRevertValue ? optimisticRevertValue : null,
      });
    } else if (expectedError) {
      console.log("Expected Error");
      dispatch({
        type: types.API_CALL_FAILURE,
        error: {
          code: error.response.status,
          message: error.response.data,
        },
      });
      dispatch({
        type: onError,
        payload: optimisticRevertValue ? optimisticRevertValue : null,
      });
    }
  }
};

export default api;
