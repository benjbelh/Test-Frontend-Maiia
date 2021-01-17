import { combineReducers } from 'redux';
import cartReducer, { ICartListState } from './Cart/reducer';
import productsReducer, { IProductListState } from './Products/reducer';

export interface IGlobalState {
  products: IProductListState;
  cart: ICartListState;
}

export const appReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});
