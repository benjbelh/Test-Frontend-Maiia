import { IProduct } from 'shared/models';
import { toast } from 'react-toastify';
import {
  READ_LIST,
  READ_LIST_SUCCESS,
  READ_LIST_ERROR,
  ReadListAction,
  ReadListSuccessAction,
  ReadListErrorAction,
} from './types';

export const readProductList = (): ReadListAction => ({
  type: READ_LIST,
});

export const readProductListSuccessfully = (productList: IProduct[]): ReadListSuccessAction => ({
  type: READ_LIST_SUCCESS,
  payload: productList,
});

export const readProductListError = (errorResponse: string): ReadListErrorAction => {
  toast.error(errorResponse);
  return {
    type: READ_LIST_ERROR,
    payload: errorResponse,
  };
};
