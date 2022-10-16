import {actionTypes} from "../action-types/product";
import {stateType, actionType} from "../types/product";

// const recents = [
//   203199580, 203203575, 203721848, 202452944, 202499614, 202499617,
// ];

const initState = {
  saved: JSON.parse(localStorage.getItem("saved_products") || "[]"),
  recently_viewed: JSON.parse(localStorage.getItem("recently_viewed") || "[]"),
  bag: JSON.parse(localStorage.getItem("asos_shopping_bag") || "[]"),

  //recently_viewed: recents,
};

const appReducer = (state: stateType = initState, action: actionType) => {
  switch (action.type) {
    case actionTypes.SAVE_PRODUCT:
      return {
        ...state,
        saved: [action.payload, ...state.saved],
      };

    case actionTypes.UNSAVE_PRODUCT:
      return {
        ...state,
        saved: state.saved.filter(item => item.id !== action.payload),
      };

    case actionTypes.UPDATE_SAVED_PRODUCT_SIZE:
      return {
        ...state,
        saved: action.payload,

        // saved : state.saved.forEach((item, index) =>{ if(item.id === action.payload.id) return state.saved[index] = action.payload })
      };

    case actionTypes.ADD_PRODUCT_TO_RECENT:
      return {
        ...state,
        recently_viewed: action.payload,
      };

    case actionTypes.REMOVE_PRODUCT_FROM_RECENT:
      return {
        ...state,
        recently_viewed: state.recently_viewed.filter(
          item => item.id !== action.payload
        ),
      };

    case actionTypes.CLEAR_RECENTLY_VIED:
      return {
        ...state,
        recently_viewed: [],
      };

    case actionTypes.ADD_PRODUCT_TO_BAG:
      return {
        ...state,
        bag: [action.payload, ...state.bag],
      };

    case actionTypes.REMOVE_PRODUCT_FROM_BAG:
      return {
        ...state,
        bag: state.bag.filter(item => item.id !== action.payload),
      };
    case actionTypes.UPDATE_PRODUCT_IN_BAG:
      return {
        ...state,
        bag: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
