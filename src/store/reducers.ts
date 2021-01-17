import { combineReducers } from 'redux';
import productsReducer, { IProductListState } from './Products/reducer';

export interface IGlobalState {
  products: IProductListState;
}

export const appReducer = combineReducers({
  products: productsReducer,
});
