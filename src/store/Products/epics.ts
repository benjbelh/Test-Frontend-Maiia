import { combineEpics, Epic } from 'redux-observable';
import { switchMap, map, catchError, filter } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import { of } from 'rxjs';
import { READ_LIST, ActionTypes, ReadListSuccessAction, ReadListErrorAction } from './types';
import { readProductList } from 'services/products.service';
import { readProductListError, readProductListSuccessfully } from './actions';
import { IState } from 'store/reducers';

export const readProductListEpic: Epic<ActionTypes, ReadListSuccessAction | ReadListErrorAction, IState> = (action$) =>
  action$.pipe(
    filter(isOfType(READ_LIST)),
    switchMap(() =>
      readProductList().pipe(
        map((response) => {
          console.log('TOTO');
          return readProductListSuccessfully(response);
        }),
        catchError((err) => of(readProductListError(err))),
      ),
    ),
  );

// filter(isOfType(READ_LIST)),
//   switchMap((action) =>
//     from(axios.get('http://localhost:5000/todos')).pipe(
//       map((response) => readProductListSuccessfully(response.data.data)),
//       catchError((err) => of(readProductListError(err))),
//     ),
//   ),

export default combineEpics(readProductListEpic);
