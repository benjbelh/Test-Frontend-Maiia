import { IconButton } from '@material-ui/core';
import { RemoveCircleOutline } from '@material-ui/icons';
import React, { FunctionComponent } from 'react';
import styles from './CartRow.module.scss';

type CartRowProps = {
  imgPath: string;
  name: string;
  quantity: number;
  onRemoveClicked: () => void;
};

export const CartRow: FunctionComponent<CartRowProps> = ({
  imgPath = '',
  name = '',
  quantity = 0,
  onRemoveClicked = () => null,
}) => (
  <div className={styles.CartRowContainer}>
    <img src={imgPath} alt="cart-row-img" className={styles.ProductImg} />
    <div className={styles.ProductInfo}>
      <div className={styles.ProductName}>{name}</div>
      <div className={styles.ProductQuantity}>Quantity: {quantity}</div>
    </div>
    <IconButton color="primary" aria-label="remove from shopping cart" onClick={onRemoveClicked}>
      <RemoveCircleOutline />
    </IconButton>
  </div>
);

export default CartRow;
