import {actionTypes} from "../action-types/app";

export interface toggleGender {
  type: actionTypes.TOGGLE_GENDER;
  payload: string;
}

export interface toggleNavBagDrawer {
  type: actionTypes.TOGGLE_NAV_BAG_DRAWER;
  payload: boolean;
}

export type stateType = {
  gender: string | null;
  nav_bag_drawer: boolean;
};

export type actionType = toggleGender | toggleNavBagDrawer;
