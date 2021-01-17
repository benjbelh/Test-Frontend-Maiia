import React, { FunctionComponent } from 'react';
import { ICartItem } from 'store/Cart/types';
import styles from './CartContainer.module.scss';
import CartRow from './CartRow';

type CartContainerProps = {
  cartList?: ICartItem[];
};

export const CartContainer: FunctionComponent<CartContainerProps> = ({ cartList = [] }) => (
  <div className={styles.CartContainer}>
    {cartList.map(({ product, quantity }) => (
      <CartRow key={product.id} imgPath={product.url} name={product.title} quantity={quantity} />
    ))}
  </div>
);

export default CartContainer;
