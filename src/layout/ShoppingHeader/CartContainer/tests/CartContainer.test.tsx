import React from 'react';
import { render } from '@testing-library/react';
import CartContainer from '../CartContainer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { initialState } from '../../../../store/initStore.mock';

describe('CartContainer', () => {
  it('should renders correctly', () => {
    const mockStore = configureStore();
    const store = mockStore(initialState);

    const { asFragment } = render(
      <Provider store={store}>
        <CartContainer />
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
