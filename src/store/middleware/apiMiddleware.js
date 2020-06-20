import axios from "axios";

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type != "API_CALL_START") return next(action);

  const { url, method, data, onSuccess, onError } = action.payload;

  next(action);
  axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");
  try {
    const response = await axios.request({
      baseURL: "http://localhost:3001/api",
      url,
      method,
      data,
    });
    dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    dispatch({ type: onError, payload: error });
  }
};

export default api;
