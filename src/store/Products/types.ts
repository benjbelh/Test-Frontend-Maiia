import { IProduct } from 'shared/models';

export const READ_LIST = '[PRODUCTS] - Read List';
export const READ_LIST_SUCCESS = '[PRODUCTS] - Read List Success';
export const READ_LIST_ERROR = '[PRODUCTS] - Read List Error';

export interface ReadListAction {
  type: typeof READ_LIST;
}

export interface ReadListSuccessAction {
  type: typeof READ_LIST_SUCCESS;
  payload: IProduct[];
}

export interface ReadListErrorAction {
  type: typeof READ_LIST_ERROR;
  payload: string;
}

export type ActionTypes = ReadListAction | ReadListSuccessAction | ReadListErrorAction;
