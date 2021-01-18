import { IProduct } from 'shared/models';
import { READ_LIST, READ_LIST_SUCCESS, READ_LIST_ERROR, ActionTypes } from './types';

export interface IProductListState {
  productList: IProduct[];
  loading: boolean;
  error: string;
}

const initialState: IProductListState = {
  productList: [],
  loading: false,
  error: '',
};

export default (state: IProductListState = initialState, action: ActionTypes): IProductListState => {
  switch (action.type) {
    case READ_LIST:
      return { ...state, loading: true, error: '' };
    case READ_LIST_SUCCESS:
      return {
        ...state,
        productList: action.payload,
        loading: false,
      };
    case READ_LIST_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
