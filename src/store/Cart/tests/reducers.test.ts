import { addToCart, decreaseCartQuantity, increaseCartQuantity, removeFromCart } from '../actions';
import cartReducer from '../reducer';

describe('Cart reducer tests', () => {
  const initialState = {
    cartList: [],
  };

  const stateItem1WithQuantity = (quantity: number) => ({
    cartList: [
      {
        product: {
          id: 1,
          title: 'Item 1',
          url: 'https://test.com/img.jpg',
        },
        quantity: quantity,
      },
    ],
  });

  it('[ADD_TO_CART] should add to cart "Item 1" product with info and quantity', () => {
    expect(cartReducer(initialState, addToCart({ id: 1, title: 'Item 1', url: 'https://test.com/img.jpg' }))).toEqual(
      stateItem1WithQuantity(1),
    );
  });

  it('[ADD_TO_CART] should update quantity of "Item 1" product while already in cartList', () => {
    expect(
      cartReducer(stateItem1WithQuantity(1), addToCart({ id: 1, title: 'Item 1', url: 'https://test.com/img.jpg' })),
    ).toEqual(stateItem1WithQuantity(2));
  });

  it('[REMOVE_FROM_CART] should remove "Item 1" product from cart', () => {
    expect(cartReducer(stateItem1WithQuantity(1), removeFromCart(1))).toEqual(initialState);
  });

  it('[INCREASE_CART_QUANTITY] should increase quantity of "Item 1" product', () => {
    expect(cartReducer(stateItem1WithQuantity(1), increaseCartQuantity(1))).toEqual(stateItem1WithQuantity(2));
  });

  it('[DECREASE_CART_QUANTITY] should decrease quantity of "Item 1" product', () => {
    expect(cartReducer(stateItem1WithQuantity(2), decreaseCartQuantity(1))).toEqual(stateItem1WithQuantity(1));
  });

  it('[DECREASE_CART_QUANTITY] should prevent decrease quantity of "Item 1" product under 1', () => {
    expect(cartReducer(stateItem1WithQuantity(1), decreaseCartQuantity(1))).toEqual(stateItem1WithQuantity(1));
  });
});
