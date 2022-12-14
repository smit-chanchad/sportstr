import { ActionTypes } from "../data/Types";
let initialState = [];

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_CATEGORY_DATA:
      return {
        ...action?.payload,
      };

    default:
      return state;
  }
};
