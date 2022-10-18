import {Dispatch} from "redux";

import {actionTypes} from "../action-types/product";
import {actionType} from "../types/product";
import {AppStateType} from "../reducers/_root";
import {recentlyViewed, savedItem, bagItem} from "../../assets/types";

export const saveProduct = (product: savedItem) => {
  return (dispatch: Dispatch<actionType>, getState: () => AppStateType) => {
    const saved_products = getState().product.saved;

    const new_saved_products = [product, ...saved_products];

    localStorage.setItem("saved_products", JSON.stringify(new_saved_products));

    dispatch({
      type: actionTypes.SAVE_PRODUCT,
      payload: product,
    });
  };
};

export const unsaveProduct = (id: number) => {
  return (dispatch: Dispatch<actionType>, getState: () => AppStateType) => {
    const saved_products = getState().product.saved;

    const new_saved_products = saved_products.filter(item => item.id !== id);

    localStorage.setItem("saved_products", JSON.stringify(new_saved_products));

    dispatch({
      type: actionTypes.UNSAVE_PRODUCT,
      payload: id,
    });
  };
};

export const updateSavedProductSize = (new_size: string, id: number) => {
  return (dispatch: Dispatch<actionType>, getState: () => AppStateType) => {
    const saved_products = getState().product.saved;
    const product_to_update = saved_products.find(product => product.id === id);

    const updated_product = {...product_to_update, selected_size: new_size};

    Object.assign(product_to_update || {}, updated_product);

    localStorage.setItem("saved_products", JSON.stringify(saved_products));
    dispatch({
      type: actionTypes.UPDATE_SAVED_PRODUCT_SIZE,
      payload: saved_products,
    });
  };
};

export const addToRecentlyViewed = (data: recentlyViewed) => {
  return (dispatch: Dispatch<actionType>, getState: () => AppStateType) => {
    const recently_viewed = getState().product.recently_viewed;

    const isPresent = recently_viewed.some(item => item.id === data.id);

    if (isPresent) {
      //IF ID ALREADY EXISTS, REMOVE IT
      const removed_item = recently_viewed.filter(item => item.id !== data.id);

      //REPLACE IT AS NEWLY RECENTLY VIEWED ID
      const new_recently_viewed = [...removed_item, data];
      localStorage.setItem(
        "recently_viewed",
        JSON.stringify(new_recently_viewed)
      );

      dispatch({
        type: actionTypes.ADD_PRODUCT_TO_RECENT,
        payload: new_recently_viewed,
      });
    } else {
      const new_recently_viewed = [...recently_viewed, data];
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

    const new_recently_viewed = recently_viewed.filter(item => item.id !== id);
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

// export const addToBag = (id: number) => {
//   return (dispatch: Dispatch<actionType>, getState: () => AppStateType) => {
//     const bag = getState().product.bag;

//     const new_bag = bag;
//   };
// };

export const addProductToBag = (item: bagItem) => {
  return (dispatch: Dispatch<actionType>, getState: () => AppStateType) => {
    const bag = getState().product.bag;

    const new_bag = [item, ...bag];

    localStorage.setItem("asos_shopping_bag", JSON.stringify(new_bag));

    dispatch({
      type: actionTypes.ADD_PRODUCT_TO_BAG,
      payload: item,
    });
  };
};

export const removeProductFromBag = (sub_id: string) => {
  return (dispatch: Dispatch<actionType>, getState: () => AppStateType) => {
    const bag = getState().product.bag;

    const new_bag = bag.filter(item => item.sub_id !== sub_id);

    localStorage.setItem("asos_shopping_bag", JSON.stringify(new_bag));

    dispatch({
      type: actionTypes.REMOVE_PRODUCT_FROM_BAG,
      payload: sub_id,
    });
  };
};

type bag_update = {
  //id: number;
  sub_id: string;
  size?: string;
  quantity?: number;
};

export const updateProductInBag = (update: bag_update) => {
  return (dispatch: Dispatch<actionType>, getState: () => AppStateType) => {
    const bag = getState().product.bag;

    const updated_bag = bag.map(item => {
      if (item.sub_id === update.sub_id) {
        return {...item, ...update};
      } else {
        return item;
      }
    });

    localStorage.setItem("asos_shopping_bag", JSON.stringify(updated_bag));

    dispatch({
      type: actionTypes.UPDATE_PRODUCT_IN_BAG,
      payload: updated_bag,
    });
  };
};
