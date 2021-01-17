import React from 'react';
import { render } from '@testing-library/react';
import ProductsPage from '../ProductsPage';

describe('ProductsPage', () => {
  it('should renders correctly', () => {
    const { asFragment } = render(<ProductsPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
