import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "./actionTypes";
import initialState from "./initialState";
import nextCartId from "../nextId";

const findProductInCart = (state, action) => {
  return state.find((item) => item.id === action.payload.id);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const foundProduct = findProductInCart(state, action);
      if (foundProduct) {
        return state.map((item) => {
          if (item.productId === foundProduct.productId) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        });
      } else {
        return [
          ...state,
          {
            id: nextCartId(state),
            ...action.payload,
            quantity: 1,
            productId: action.payload.id,
          },
        ];
      }
    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload);

    case INCREASE_QUANTITY:
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });

    case DECREASE_QUANTITY:
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        } else {
          return item;
        }
      });

    default:
      return state;
  }
};

export default reducer;
