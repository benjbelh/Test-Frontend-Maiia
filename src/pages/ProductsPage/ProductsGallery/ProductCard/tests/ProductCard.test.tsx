import React from 'react';
import { render } from '@testing-library/react';
import ProductCard from '../ProductCard';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { initialState } from '../../../../../store/initStore.mock';

describe('ProductCard', () => {
  it('should renders correctly with card props', () => {
    const mockStore = configureStore();
    const store = mockStore(initialState);

    const { asFragment } = render(
      <Provider store={store}>
        <ProductCard id={1} name="Product Name" picturePath="https://test.com/img.jpg" />
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
