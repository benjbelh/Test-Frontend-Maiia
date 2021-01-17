import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import { appReducer, IState } from './reducers';
import appEpic from './epics';
import { ActionTypes } from './Products/types';

const epicMiddleware = createEpicMiddleware<ActionTypes, ActionTypes, IState>();

const configuration = () => {
  const store = createStore(appReducer, composeWithDevTools(applyMiddleware(epicMiddleware)));

  epicMiddleware.run(appEpic);

  return store;
};

export default configuration();
