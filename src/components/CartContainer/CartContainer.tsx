import React, { FunctionComponent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCartQuantity, increaseCartQuantity, removeFromCart } from 'store/Cart/actions';
import { cartListSelector } from 'store/Cart/selectors';
import styles from './CartContainer.module.scss';
import CartRow from './CartRow';

export const CartContainer: FunctionComponent<{}> = () => {
  const cartList = useSelector(cartListSelector);
  const dispatch = useDispatch();

  const onRemoveClicked = useCallback(
    (productId: number) => {
      dispatch(removeFromCart(productId));
    },
    [dispatch, removeFromCart],
  );

  const onIncreaseQuantity = useCallback(
    (productId: number) => {
      dispatch(increaseCartQuantity(productId));
    },
    [dispatch, increaseCartQuantity],
  );

  const onDecreaseQuantity = useCallback(
    (productId: number) => {
      dispatch(decreaseCartQuantity(productId));
    },
    [dispatch, decreaseCartQuantity],
  );

  return (
    <div className={styles.CartContainer}>
      {cartList.map(({ product, quantity }) => (
        <CartRow
          key={product.id}
          imgPath={product.url}
          name={product.title}
          quantity={quantity}
          onRemoveProduct={() => onRemoveClicked(product.id)}
          onIncreaseQuantity={() => onIncreaseQuantity(product.id)}
          onDecreaseQuantity={() => onDecreaseQuantity(product.id)}
        />
      ))}
    </div>
  );
};

export default CartContainer;
