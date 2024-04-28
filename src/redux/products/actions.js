import { ADD_PRODUCT, REMOVE_QUANTITY, ADD_QUANTITY} from "./actionTypes";

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const removeQuantity = (productId) => {
  return {
    type: REMOVE_QUANTITY,
    payload: productId,
  };
};

export const addQuantity = (productId, quantity) => {
  return {
    type: ADD_QUANTITY,
    payload: { productId, quantity },
  };
};
