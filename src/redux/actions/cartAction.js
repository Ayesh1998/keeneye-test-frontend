import axios from "axios";
import { url } from "../../constants/constants";

export const addToCart = (item) => ({
  type: "ADD_CART",
  payload: item,
});

export const reduceItemFromCart = (item) => ({
  type: "REDUCE_ONE_ITEM_CART",
  payload: item,
});

export const toggleDropdown = () => ({
  type: "TOGGLE_DROPDOWN",
});

export const removeItemFromCart = (item) => ({
  type: "REMOVE_CART",
  payload: item,
});

export const fetchProducts = () => (dispatch) => {
  axios({
    method: "GET",
    url: encodeURI(`${url}api/robots`),
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "max-age=0, private, must-revalidate",
      Pragma: "no-cache",
    },
  }).then((response) => {
      const robotsModified = response.data.data.map((item, index) => ({
        ...item,
        id: index,
        noAddedToCart: 0,
        createdAt: `${item.createdAt.slice(8, 10)}-${item.createdAt.slice(5, 7)}
        -${item.createdAt.slice(0, 4)}`,
      }));
      dispatch({
        type: "FETCH_PRODUCTS",
        payload: {
          productsModified: robotsModified,
          productsOriginal: response.data.data,
        },
      });
    }).catch((e) => {
      dispatch({ type: "FETCH_PRODUCTS_ERROR", payload: e });
    });
};
