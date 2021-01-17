import { createSelector } from 'reselect';
import { IGlobalState } from 'store/reducers';
import { ICartListState } from './reducer';

const getCartList = (state: IGlobalState): ICartListState => state.cart;

export const cartItemNumberSelector = createSelector(getCartList, ({ cartList }) => cartList.length);

export const cartListSelector = createSelector(getCartList, ({ cartList }) => cartList);
