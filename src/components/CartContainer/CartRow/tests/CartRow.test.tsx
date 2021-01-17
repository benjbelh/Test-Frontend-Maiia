import React from 'react';
import { render } from '@testing-library/react';
import CartRow from '../CartRow';

describe('CartRow', () => {
  it('should renders correctly', () => {
    const { asFragment } = render(<CartRow propName='' />);
    expect(asFragment()).toMatchSnapshot();
  });
});
