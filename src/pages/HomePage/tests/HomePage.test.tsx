import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../HomePage';

describe('HomePage', () => {
  it('should renders correctly', () => {
    const { asFragment } = render(<HomePage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
