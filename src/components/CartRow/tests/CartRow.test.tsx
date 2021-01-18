import React from 'react';
import { render } from '@testing-library/react';
import CartRow from '../CartRow';

describe('CartRow', () => {
  it('should renders correctly with properties', () => {
    const { asFragment } = render(
      <CartRow
        imgPath="https://test.com/img.jpg"
        name="Item 1"
        quantity={0}
        onRemoveProduct={() => null}
        onIncreaseQuantity={() => null}
        onDecreaseQuantity={() => null}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
