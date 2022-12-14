import * as Actions from "../actions/types";

let initialState = { cart: [], cartItems: 0, cartPrice: 0 };

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CART_ADD:
      const p = action.payload.product;
      const q = action.payload.quantity;

      let existing = state.cart.find((item) => item.product.id === p.id);
      if (existing) {
        existing.quantity += q;
      } else {
        state.cart = [...state.cart, action.payload];
      }
      state.cartItems += q;
      state.cartPrice += p.price * q;
      return state;

    case Actions.CART_UPDATE:
      state.cart = state.cart.map((item) => {
        if (item.product.id === action.payload.product.id) {
          const diff = action.payload.quantity - item.quantity;
          state.cartItems += diff;
          state.cartPrice += item.product.price * diff;
          return action.payload;
        } else {
          return item;
        }
      });
      return state;

    case Actions.CART_REMOVE:
      let selection = state.cart.find(
        (item) => item.product.id === action.payload.id
      );
      state.cartItems -= selection.quantity;
      state.cartPrice -= selection.quantity * selection.product.price;
      state.cart = state.cart.filter((item) => item !== selection);
      return state;

    case Actions.CART_CLEAR:
      return initialState;

    default:
      return state || {};
  }
};
