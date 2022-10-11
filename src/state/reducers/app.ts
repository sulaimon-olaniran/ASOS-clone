import {actionTypes} from "../action-types/app";
import {stateType} from "../types/app";

const initState = {
  gender: "men" || null,
};

const appReducer = (state: stateType = initState, action: any) => {
  switch (action.type) {
    case actionTypes.TOGGLE_GENDER:
      return {
        ...state,
        gender: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
