import { combineEpics, Epic } from 'redux-observable';
import { switchMap, map, catchError, filter } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import { of } from 'rxjs';
import { READ_LIST, ActionTypes, ReadListSuccessAction, ReadListErrorAction } from './types';
import { readProductList } from 'services/products.service';
import { readProductListError, readProductListSuccessfully } from './actions';
import { IGlobalState } from 'store/reducers';

export const readProductListEpic: Epic<ActionTypes, ReadListSuccessAction | ReadListErrorAction, IGlobalState> = (
  action$,
) =>
  action$.pipe(
    filter(isOfType(READ_LIST)),
    switchMap(() =>
      readProductList().pipe(
        map((response) => {
          return readProductListSuccessfully(response);
        }),
        catchError((err) => of(readProductListError(err))),
      ),
    ),
  );

export default combineEpics(readProductListEpic);
