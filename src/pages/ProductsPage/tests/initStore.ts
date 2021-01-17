import { IGlobalState } from 'store/reducers';
import productList from '../../../services/mockData/productList.mock';

export const initialState: IGlobalState = {
  cart: {
    cartList: [],
  },
  products: {
    productList,
    loading: false,
    error: '',
  },
};
