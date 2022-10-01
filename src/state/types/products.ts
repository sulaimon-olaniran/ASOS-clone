import {actionTypes} from "../action-types/product";

interface saveProduct {
  type: actionTypes.SAVE_PRODUCT;
  payload: number;
}

interface unsaveProduct {
  type: actionTypes.UNSAVE_PRODUCT;
  payload: number;
}

export type stateType = {
  saved: number[];
  receently_viewed?: number[];
};

export type actionType = saveProduct | unsaveProduct;
