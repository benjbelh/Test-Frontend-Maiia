import React from 'react';
import { render } from '@testing-library/react';
import ProductCard from '../ProductCard';

describe('ProductCard', () => {
  it('should renders correctly with card props', () => {
    const { asFragment } = render(<ProductCard id={1} name="Product Name" picturePath="https://test.com/img.jpg" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
