import axios from "axios";
import * as types from "../constants";

const HTTP = "https://pet-api-store.herokuapp.com/product";

export const getProductsSuccess = (payload) => ({
  type: types.GET_PRODUCTS_SUCCESS,
  payload,
});

export const getProductsFail = (error) => ({
  type: types.GET_PRODUCTS_FAIL,
  error,
});

export const isLoadingProduct = (isLoading) => ({
  type: types.ISLOADING_PRODUCT,
  isLoading,
});

export const getProducts = (prodID) => (dispatch) => {
  dispatch(isLoadingProduct(true));

  return axios
    .get(prodID ? `${HTTP}/${prodID}` : HTTP, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then(function (response) {
      if (response.status === 200) {
        dispatch(getProductsSuccess(response));
      }
    })
    .catch(function (error) {
      dispatch(getProductsFail(error));
    });
};
