import React, { FunctionComponent } from 'react';
import styles from './CartRow.module.scss';

type CartRowProps = {
  imgPath: string;
  name: string;
  quantity: number;
};

export const CartRow: FunctionComponent<CartRowProps> = ({ imgPath = '', name = '', quantity = 0 }) => (
  <div className={styles.CartRowContainer}>
    <img src={imgPath} alt="cart-row-img" className={styles.ProductImg} />
    <div className={styles.ProductInfo}>
      <div className={styles.ProductName}>{name}</div>
      <div className={styles.ProductQuantity}>Quantity: {quantity}</div>
    </div>
  </div>
);

export default CartRow;
