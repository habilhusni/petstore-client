import axios from "axios";
import * as types from "../constants";

const HTTP = "https://pet-api-store.herokuapp.com/category";

export const getCategoriesSuccess = (payload) => ({
  type: types.GET_CATEGORIES_SUCCESS,
  payload,
});

export const getCategoriesFail = (error) => ({
  type: types.GET_CATEGORIES_FAIL,
  error,
});

export const isLoadingCategory = (isLoading) => ({
  type: types.ISLOADING_CATEGORY,
  isLoading,
});

export const getCategories = (catID) => (dispatch) => {
  dispatch(isLoadingCategory(true));

  return axios
    .get(catID ? `${HTTP}/${catID}` : HTTP, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then(function (response) {
      if (response.status === 200) {
        dispatch(getCategoriesSuccess(response));
      }
    })
    .catch(function (error) {
      dispatch(getCategoriesFail(error));
    });
};
