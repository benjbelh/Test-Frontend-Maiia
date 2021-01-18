import React from 'react';
import { render } from '@testing-library/react';
import ShoppingHeader from '../ShoppingHeader';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { initialState } from '../../../store/initStore.mock';

describe('ShoppingHeader', () => {
  it('should renders correctly', () => {
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const { asFragment } = render(
      <Provider store={store}>
        <ShoppingHeader title="" />
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
