import axios from "axios";
import * as types from "../constants";

const HTTP = "https://pet-api-store.herokuapp.com/brand";

export const getBrandsSuccess = (payload) => ({
  type: types.GET_BRANDS_SUCCESS,
  payload,
});

export const getBrandsFail = (error) => ({
  type: types.GET_BRANDS_FAIL,
  error,
});

export const isLoadingBrand = (isLoading) => ({
  type: types.ISLOADING_BRAND,
  isLoading,
});

export const getBrands = (brandID) => (dispatch) => {
  dispatch(isLoadingBrand(true));

  return axios
    .get(brandID ? `${HTTP}/${brandID}` : HTTP, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then(function (response) {
      if (response.status === 200) {
        dispatch(getBrandsSuccess(response));
      }
    })
    .catch(function (error) {
      dispatch(getBrandsFail(error));
    });
};
