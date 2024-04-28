import {
  ADD_PRODUCT,
  REMOVE_QUANTITY,
  ADD_QUANTITY
} from "./actionTypes";
import initialState from "./initialState";
import nextProductId from "../nextId";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [
        ...state,
        {
          id: nextProductId(state),
          ...action.payload,
          price: parseInt(action.payload.price),
          quantity: parseInt(action.payload.quantity),
        },
      ];

    case REMOVE_QUANTITY:
      return state.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        } else {
          return product;
        }
      });

    case ADD_QUANTITY:
      return state.map((product) => {
        if (product.id === action.payload.productId) {
          return {
            ...product,
            quantity: product.quantity + action.payload.quantity,
          };
        } else {
          return product;
        }
      });

    default:
      return state;
  }
};

export default reducer;
