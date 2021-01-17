import React from 'react';
import { render } from '@testing-library/react';
import SkeletonCard from '../SkeletonCard';

describe('SkeletonCard', () => {
  it('should renders correctly', () => {
    const { asFragment } = render(<SkeletonCard />);
    expect(asFragment()).toMatchSnapshot();
  });
});
