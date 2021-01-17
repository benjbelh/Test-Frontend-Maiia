import { createSelector } from 'reselect';
import { IGlobalState } from 'store/reducers';
import { IProductListState } from './reducer';

const getProductList = (state: IGlobalState): IProductListState => state.products;

export const productsSelector = createSelector(getProductList, ({ productList }) => productList);
export const isLoadingSelector = createSelector(getProductList, ({ loading }) => loading);
