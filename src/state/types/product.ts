import {actionTypes} from "../action-types/product";
import {recentlyViewed, savedItem} from "../../assets/types";

interface saveProduct {
  type: actionTypes.SAVE_PRODUCT;
  payload: savedItem;
}

interface unsaveProduct {
  type: actionTypes.UNSAVE_PRODUCT;
  payload: number;
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

interface updateSavedProductSize {
  type: actionTypes.UPDATE_SAVED_PRODUCT_SIZE;
  payload: savedItem[];
}

export type stateType = {
  saved: savedItem[];
  recently_viewed: recentlyViewed[];
  bag: number[];
};

export type actionType =
  | saveProduct
  | unsaveProduct
  | addToRecentlyViewed
  | removeFromRecentlyViewed
  | clearRecentlyViewed
  | updateSavedProductSize;
