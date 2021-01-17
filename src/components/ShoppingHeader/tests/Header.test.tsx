import React from 'react';
import { render } from '@testing-library/react';
import ShoppingHeader from '../ShoppingHeader';

describe('ShoppingHeader', () => {
  it('should renders correctly', () => {
    const { asFragment } = render(<ShoppingHeader title="" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
