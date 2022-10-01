import {Dispatch} from "redux";

import {actionTypes} from "../action-types/product";
import {actionType} from "../types/products";

export const saveProduct = (id: number) => {
  return (dispatch: Dispatch<actionType>) => {
    const saved_products = JSON.parse(
      localStorage.getItem("saved_products") || "[]"
    );

    const new_saved_products = [...saved_products, id];

    localStorage.setItem("saved_products", JSON.stringify(new_saved_products));

    dispatch({
      type: actionTypes.SAVE_PRODUCT,
      payload: id,
    });
  };
};

export const unsaveProduct = (id: number) => {
  return (dispatch: Dispatch<actionType>) => {
    const saved_products: number[] = JSON.parse(
      localStorage.getItem("saved_products") || "[]"
    );

    const new_saved_products = saved_products.filter(item => item !== id);

    localStorage.setItem("saved_products", JSON.stringify(new_saved_products));

    dispatch({
      type: actionTypes.UNSAVE_PRODUCT,
      payload: id,
    });
  };
};
