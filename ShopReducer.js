import * as Actions from "../actions/types";

// const state = [];
const initState = {
  name: "",
  phone: "",
  code: 1,
  date: new Date(),
};
export const ShopReducer = (state = initState, action) => {
  switch (action.type) {
    case Actions.DATA_LOAD:
      console.log("payload", action.payload);
      return {
        ...action?.payload,
      };

    default:
      return state;
  }
};
