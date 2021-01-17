import { createSelector } from 'reselect';
import { IState } from 'store/reducers';
import { IProductListState } from './reducer';

const getProductList = (state: IState): IProductListState => state.products;

export const productsSelector = createSelector(getProductList, ({ productList }) => productList);
export const isLoadingSelector = createSelector(getProductList, ({ loading }) => loading);
