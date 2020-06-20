import * as types from "./actionTypes";
import axios from "axios";

const baseUrl = process.env.API_URL;

export const registerUserSuccess = (user) => {
  return { type: types.REGISTER_USER_SUCCESS, user };
};

export const registerUserFailure = () => {
  return { type: types.REGISTER_USER_FAILURE };
};

export const registerUser = (userData) => {
  return (dispatch) => {
    const apiEndPoint = baseUrl + "/users";
    return axios
      .post(apiEndPoint, {
        name: userData.fullname,
        email: userData.email,
        password: userData.password,
      })
      .then(({ data, headers }) => {
        if (data && headers) {
          localStorage.setItem("token", headers["x-auth-token"]);
          dispatch(registerUserSuccess(data));
        }
      })
      .catch(({ response }) => {
        if (response && response.status === 400) {
          console.log("some error");
        }
      });
  };
};
