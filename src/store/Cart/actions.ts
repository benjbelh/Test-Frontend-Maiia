import { IProduct } from 'shared/models';
import {
  ADD_TO_CART,
  AddToCartAction,
  RemoveFromCartAction,
  IncreaseCartQuantityAction,
  DecreaseCartQuantityAction,
  REMOVE_FROM_CART,
  INCREASE_CART_QUANTITY,
  DECREASE_CART_QUANTITY,
} from './types';

export const addToCart = (product: IProduct): AddToCartAction => ({
  type: ADD_TO_CART,
  payload: {
    product,
    quantity: 1,
  },
});

export const removeFromCart = (productId: number): RemoveFromCartAction => ({
  type: REMOVE_FROM_CART,
  payload: {
    productId,
  },
});

export const increaseCartQuantity = (productId: number): IncreaseCartQuantityAction => ({
  type: INCREASE_CART_QUANTITY,
  payload: {
    productId,
  },
});

export const decreaseCartQuantity = (productId: number): DecreaseCartQuantityAction => ({
  type: DECREASE_CART_QUANTITY,
  payload: {
    productId,
  },
});
