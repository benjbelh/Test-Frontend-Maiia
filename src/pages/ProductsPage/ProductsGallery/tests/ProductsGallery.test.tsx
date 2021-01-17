import React from 'react';
import { render } from '@testing-library/react';
import ProductsGallery from '../ProductsGallery';
import productList from '../../../../services/mockData/productList.mock';

describe('ProductsGallery', () => {
  it('should renders correctly by default with skeleton', () => {
    const { asFragment } = render(<ProductsGallery />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should renders correctly when products are fetched', () => {
    const { asFragment } = render(<ProductsGallery isLoading={false} productList={productList} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
