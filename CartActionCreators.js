import * as Actions from "./types";

export const addToCart = (product, quantity) => {
  return {
    type: Actions.CART_ADD,
    payload: {
      product,
      quantity: quantity || 1,
    },
  };
};

export const updateCartQuantity = (product, quantity) => {
  return {
    type: Actions.CART_UPDATE,
    payload: {
      product,
      quantity,
    },
  };
};

export const removeFromCart = (product) => {
  return { type: Actions.CART_REMOVE, payload: product };
};

export const clearCart = () => {
  return { type: Actions.CART_CLEAR };
};
