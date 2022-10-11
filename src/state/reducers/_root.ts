import {combineReducers} from "redux";

import app from "./app";
import product from "./product";

const rootReducer = combineReducers({
  app,
  product,
});

export default rootReducer;

export type AppStateType = ReturnType<typeof rootReducer>;
