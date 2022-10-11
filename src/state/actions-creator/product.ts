import {Dispatch} from "redux";

import {actionTypes} from "../action-types/product";
import {actionType} from "../types/product";
import {AppStateType} from "../reducers/_root";

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

export const addToRecentlyViewed = (id: number) => {
  return (dispatch: Dispatch<actionType>, getState: () => AppStateType) => {
    const recently_viewed = getState().product.recently_viewed;

    if (recently_viewed.includes(id)) {
      //IF ID ALREADY EXISTS, REMOVE IT
      const removed_id = recently_viewed.filter(item => item !== id);

      //REPLACE IT AS NEWLY RECENTLY VIEWED ID
      const new_recently_viewed = [...removed_id, id];
      localStorage.setItem(
        "recently_viewed",
        JSON.stringify(new_recently_viewed)
      );

      dispatch({
        type: actionTypes.ADD_PRODUCT_TO_RECENT,
        payload: new_recently_viewed,
      });
    } else {
      const new_recently_viewed = [...recently_viewed, id];
      localStorage.setItem(
        "recently_viewed",
        JSON.stringify(new_recently_viewed)
      );
      dispatch({
        type: actionTypes.ADD_PRODUCT_TO_RECENT,
        payload: new_recently_viewed,
      });
    }
  };
};

export const removeFromRecentlyViewed = (id: number) => {
  return (dispatch: Dispatch<actionType>, getState: () => AppStateType) => {
    const recently_viewed = getState().product.recently_viewed;

    const new_recently_viewed = recently_viewed.filter(item => item !== id);
    localStorage.setItem(
      "recently_viewed",
      JSON.stringify(new_recently_viewed)
    );

    dispatch({
      type: actionTypes.REMOVE_PRODUCT_FROM_RECENT,
      payload: id,
    });
  };
};

export const clearRecentlyViewed = () => {
  return (dispatch: Dispatch<actionType>) => {
    const new_recently_viewed: number[] = [];

    localStorage.setItem(
      "recently_viewed",
      JSON.stringify(new_recently_viewed)
    );

    dispatch({
      type: actionTypes.CLEAR_RECENTLY_VIED,
    });
  };
};
