import { createStore, applyMiddleware, compose } from "redux";
import { allReducers } from "./reducers/allReducers";
import thunk from "redux-thunk";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
);
