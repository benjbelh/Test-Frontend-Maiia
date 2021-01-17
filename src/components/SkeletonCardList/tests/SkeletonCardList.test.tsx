import React from 'react';
import { render } from '@testing-library/react';
import SkeletonCardList from '../SkeletonCardList';

describe('SkeletonCardList', () => {
  it('should renders correctly', () => {
    const { asFragment } = render(<SkeletonCardList cardNumber={6} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
