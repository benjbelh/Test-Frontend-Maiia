import React from 'react';
import { render } from '@testing-library/react';
import CartContainer from '../CartContainer';

describe('CartContainer', () => {
  it('should renders correctly', () => {
    const { asFragment } = render(<CartContainer propName='' />);
    expect(asFragment()).toMatchSnapshot();
  });
});
