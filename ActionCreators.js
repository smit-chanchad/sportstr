import * as Actions from "./types";

export const setProductData = (payload) => {
  return { type: Actions.DATA_LOAD, payload };
};

export const setCartegoryData = (payload) => {
  return { type: Actions.SET_CATEGORY_DATA, payload };
};
