import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import thunk from "redux-thunk";
import appReducer from "../reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  appReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
