import React, { FunctionComponent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from 'store/Cart/actions';
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

  return (
    <div className={styles.CartContainer}>
      {cartList.map(({ product, quantity }) => (
        <CartRow
          key={product.id}
          imgPath={product.url}
          name={product.title}
          quantity={quantity}
          onRemoveClicked={() => onRemoveClicked(product.id)}
        />
      ))}
    </div>
  );
};

export default CartContainer;
