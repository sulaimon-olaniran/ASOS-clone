import {Dispatch} from "redux";

import {actionTypes} from "../action-types/app";
import {actionType} from "../types/app";

export const toggleGender = (gender: string) => {
  return (dispatch: Dispatch<actionType>) => {
    dispatch({
      type: actionTypes.TOGGLE_GENDER,
      payload: gender,
    });
  };
};

export const toggleNavBagDrawer = (open: boolean) => {
  return (dispatch: Dispatch<actionType>) => {
    dispatch({
      type: actionTypes.TOGGLE_NAV_BAG_DRAWER,
      payload: open,
    });
  };
};
