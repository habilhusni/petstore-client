import axios from "axios";
import * as types from "../constants";
import { handleGlobalLoading } from "./loading";
import { setToken } from "../helper/utils";

const HTTP = "https://pet-api-store.herokuapp.com/login";

export const fetchSignInSuccess = () => ({
  type: types.SIGNIN_SUCCESS,
});

export const fetchSignInFail = (error) => ({
  type: types.SIGNIN_FAIL,
  error,
});

export const fetchSignIn = (data) => (dispatch) => {
  dispatch(handleGlobalLoading(true));

  return axios
    .post(HTTP, {
      Name: data.Name,
      Password: data.Password,
    })
    .then(function (response) {
      setToken(response.data);
      dispatch(fetchSignInSuccess());
      dispatch(handleGlobalLoading(false));
    })
    .catch(function (error) {
      dispatch(fetchSignInFail(error));
      dispatch(handleGlobalLoading(false));
    });
};
