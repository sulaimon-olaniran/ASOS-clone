import {actionTypes} from "../action-types/product";
import {stateType, actionType} from "../types/products";

const initState = {
  saved: JSON.parse(localStorage.getItem("saved_products") || "[]"),
  recently_viewed: JSON.parse(
    localStorage.getItem("recently_viewed_products") || "[]"
  ),
};

const appReducer = (state: stateType = initState, action: actionType) => {
  switch (action.type) {
    case actionTypes.SAVE_PRODUCT:
      return {
        ...state,
        saved: [...state.saved, action.payload],
      };

    case actionTypes.UNSAVE_PRODUCT:
      return {
        ...state,
        saved: state.saved.filter(item => item !== action.payload),
      };
    default:
      return state;
  }
};

export default appReducer;
