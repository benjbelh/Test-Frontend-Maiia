import { ICartItem } from 'shared/models';
import { ActionTypes, ADD_TO_CART, DECREASE_CART_QUANTITY, INCREASE_CART_QUANTITY, REMOVE_FROM_CART } from './types';

export interface ICartListState {
  cartList: ICartItem[];
}

const initialState: ICartListState = {
  cartList: [],
};

export default (state: ICartListState = initialState, action: ActionTypes): ICartListState => {
  switch (action.type) {
    case ADD_TO_CART:
      const cartItemIndex = state.cartList.findIndex((cartItem) => cartItem.product.id == action.payload.product.id);
      if (cartItemIndex > -1) {
        const updatedCart = [...state.cartList];
        updatedCart[cartItemIndex].quantity++;
        return {
          ...state,
          cartList: updatedCart,
        };
      }
      return { ...state, cartList: [...state.cartList, action.payload] };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartList: state.cartList.filter((cartItem) => cartItem.product.id !== action.payload.productId),
      };

    case INCREASE_CART_QUANTITY:
      const indexToIncrease = state.cartList.findIndex((cartItem) => cartItem.product.id == action.payload.productId);
      const increasedCart = [...state.cartList];
      increasedCart[indexToIncrease].quantity++;
      return {
        ...state,
        cartList: increasedCart,
      };

    case DECREASE_CART_QUANTITY:
      const indexToDecrease = state.cartList.findIndex((cartItem) => cartItem.product.id == action.payload.productId);
      const decreasedCart = [...state.cartList];
      if (decreasedCart[indexToDecrease].quantity > 1) decreasedCart[indexToDecrease].quantity--;
      return {
        ...state,
        cartList: decreasedCart,
      };

    default:
      return state;
  }
};
