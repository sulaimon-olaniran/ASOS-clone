import {SAVE_PRODUCT, UNSAVE_PRODUCT} from "../action-types/product";

const initState = {
  saved: [],
  recently_viewed: [],
};

const appReducer = (state = initState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default appReducer;
