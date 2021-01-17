import { combineEpics } from 'redux-observable';
import productsEpics from './Products/epics';

export default combineEpics(productsEpics);
