import {actionTypes} from "../action-types/product";
import {recentlyViewed, savedItem, bagItem} from "../../assets/types";

interface saveProduct {
  type: actionTypes.SAVE_PRODUCT;
  payload: savedItem;
}

interface unsaveProduct {
  type: actionTypes.UNSAVE_PRODUCT;
  payload: number;
}

interface updateSavedProductSize {
  type: actionTypes.UPDATE_SAVED_PRODUCT_SIZE;
  payload: savedItem[];
}

export interface addToRecentlyViewed {
  type: actionTypes.ADD_PRODUCT_TO_RECENT;
  payload: recentlyViewed[];
}

interface removeFromRecentlyViewed {
  type: actionTypes.REMOVE_PRODUCT_FROM_RECENT;
  payload: number;
}

interface clearRecentlyViewed {
  type: actionTypes.CLEAR_RECENTLY_VIED;
}

interface addProductToBag {
  type: actionTypes.ADD_PRODUCT_TO_BAG;
  payload: bagItem;
}

interface removeProductFromBag {
  type: actionTypes.REMOVE_PRODUCT_FROM_BAG;
  payload: number; // PRODUCT ID TO REMOVE IT FROM BAG
}

interface updateProductInBag {
  type: actionTypes.UPDATE_PRODUCT_IN_BAG;
  payload: bagItem[];
}

export type stateType = {
  saved: savedItem[];
  recently_viewed: recentlyViewed[];
  bag: bagItem[];
};

export type actionType =
  | saveProduct
  | unsaveProduct
  | addToRecentlyViewed
  | removeFromRecentlyViewed
  | clearRecentlyViewed
  | updateSavedProductSize
  | addProductToBag
  | removeProductFromBag
  | updateProductInBag;
