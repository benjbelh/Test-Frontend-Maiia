export const ADD_TO_CART = '[CART] - ADD PRODUCT';
export const REMOVE_FROM_CART = '[CART] - REMOVE PRODUCT';
export const INCREASE_CART_QUANTITY = '[CART] - INCREASE QUANTITY';
export const DECREASE_CART_QUANTITY = '[CART] - DECREASE QUANTITY';

export type IProduct = {
  id: number;
  title: string;
  url: string;
};

export type ICartItem = {
  product: IProduct;
  quantity: number;
};

export interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: ICartItem;
}

export interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  payload: {
    productId: number;
  };
}

export interface IncreaseCartQuantityAction {
  type: typeof INCREASE_CART_QUANTITY;
  payload: {
    productId: number;
  };
}

export interface DecreaseCartQuantityAction {
  type: typeof DECREASE_CART_QUANTITY;
  payload: {
    productId: number;
  };
}

export type ActionTypes =
  | AddToCartAction
  | RemoveFromCartAction
  | IncreaseCartQuantityAction
  | DecreaseCartQuantityAction;
