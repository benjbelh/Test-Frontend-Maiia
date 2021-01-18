import React from 'react';
import { render } from '@testing-library/react';
import ProductsGallery from '../ProductsGallery';
import productList from '../../../../services/mockData/productList.mock';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { initialState } from '../../../../store/initStore.mock';

describe('ProductsGallery', () => {
  const mockStore = configureStore();

  it('should renders correctly by default with skeleton', () => {
    const store = mockStore(initialState);
    const { asFragment } = render(
      <Provider store={store}>
        <ProductsGallery />
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should renders correctly when products are fetched', () => {
    const store = mockStore(initialState);
    const { asFragment } = render(
      <Provider store={store}>
        <ProductsGallery isLoading={false} productList={productList} />
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
