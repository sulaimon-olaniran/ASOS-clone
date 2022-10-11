import {actionTypes} from "../action-types/product";

interface saveProduct {
  type: actionTypes.SAVE_PRODUCT;
  payload: number;
}

interface unsaveProduct {
  type: actionTypes.UNSAVE_PRODUCT;
  payload: number;
}

interface addToRecentlyViewed {
  type: actionTypes.ADD_PRODUCT_TO_RECENT;
  payload: number[];
}

interface removeFromRecentlyViewed {
  type: actionTypes.REMOVE_PRODUCT_FROM_RECENT;
  payload: number;
}

interface clearRecentlyViewed {
  type: actionTypes.CLEAR_RECENTLY_VIED;
}

export type stateType = {
  saved: number[];
  recently_viewed: number[];
};

export type actionType =
  | saveProduct
  | unsaveProduct
  | addToRecentlyViewed
  | removeFromRecentlyViewed
  | clearRecentlyViewed;
