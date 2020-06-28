import axios from "axios";
import * as types from "../constants";
import { generateUniqueString } from "../helper/utils";
import { handleGlobalLoading } from "./loading";

const HTTP = "https://pet-api-store.herokuapp.com/signup";

export const fetchSignUpSuccess = () => ({
  type: types.SIGNUP_SUCCESS,
});

export const fetchSignUpFail = (error) => ({
  type: types.SIGNUP_FAIL,
  error,
});

export const fetchSignUp = (data) => (dispatch) => {
  dispatch(handleGlobalLoading(true));

  return axios
    .post(HTTP, {
      Id: generateUniqueString("usrid"),
      Name: data.Name,
      Email: data.Email,
      is_Admin: data.is_Admin,
      Password: data.Password,
    })
    .then(function (response) {
      if (response.status === 200) {
        dispatch(fetchSignUpSuccess());
        dispatch(handleGlobalLoading(false));
      }
    })
    .catch(function (error) {
      dispatch(fetchSignUpFail(error));
      dispatch(handleGlobalLoading(false));
    });
};
