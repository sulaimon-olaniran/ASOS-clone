import {actionTypes} from "../action-types/app";
import {stateType} from "../types/app";

const initState = {
  gender: "men" || null,
  nav_bag_drawer: false,
};

const appReducer = (state: stateType = initState, action: any) => {
  switch (action.type) {
    case actionTypes.TOGGLE_GENDER:
      return {
        ...state,
        gender: action.payload,
      };

    case actionTypes.TOGGLE_NAV_BAG_DRAWER:
      return {
        ...state,
        nav_bag_drawer: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
