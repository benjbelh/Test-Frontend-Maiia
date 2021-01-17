import React from 'react';
import { render } from '@testing-library/react';
import ProductsPage from '../ProductsPage';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { initialState } from './initStore';

describe('ProductsPage', () => {
  it('should renders correctly when data fetched', () => {
    const mockStore = configureStore();
    const store = mockStore(initialState);

    const { asFragment } = render(
      <Provider store={store}>
        <ProductsPage />)
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should renders correctly while fetching', () => {
    const mockStore = configureStore();
    const store = mockStore({
      products: {
        productList: [],
        loading: true,
        error: '',
      },
    });

    const { asFragment } = render(
      <Provider store={store}>
        <ProductsPage />)
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
