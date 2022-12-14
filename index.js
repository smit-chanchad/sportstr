import { combineReducers } from "redux";
import { CartReducer } from "./CartReducer";
import { categoryReducer } from "./CategoryReducer";
import { ShopReducer } from "./ShopReducer";

const appReducer = combineReducers({
  shop: ShopReducer,
  cart: CartReducer,
  category: categoryReducer,
});

export default appReducer;
