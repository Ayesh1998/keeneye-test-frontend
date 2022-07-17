import {
  removeOneItemFromCartLogic,
  addItemToCartLogic,
  toggleDropdownLogic,
  removeCartItemsLogic,
} from "./logics";

const initState = {
  productsModified: [],
  productsOriginal: [],
  toggleDropdown: false,
  fetchError: "",
};

export const ProductsReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_CART":
      return {
        ...state,
        productsModified: addItemToCartLogic(
          state.productsModified,
          action.payload
        ),
      };
    case "TOGGLE_DROPDOWN":
      return {
        ...state,
        toggleDropdown: toggleDropdownLogic(state.toggleDropdown),
      };
    case "REMOVE_CART":
      return {
        ...state,
        productsModified: removeCartItemsLogic(
          state.productsModified,
          action.payload
        ),
      };
    case "FETCH_PRODUCTS":
      return {
        ...state,
        productsModified: action.payload.productsModified,
        productsOriginal: action.payload.productsOriginal,
      };
    case "FETCH_PRODUCTS_ERROR":
      return {
        ...state,
        fetchError: "Could not fetch data",
      };
    case "REDUCE_ONE_ITEM_CART":
      return {
        ...state,
        productsModified: removeOneItemFromCartLogic(
          state.productsModified,
          action.payload
        ),
      };

    default:
      return state;
  }
};
