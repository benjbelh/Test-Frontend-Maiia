import { IconButton } from '@material-ui/core';
import { AddBox, IndeterminateCheckBox, RemoveCircleOutline } from '@material-ui/icons';
import React, { FunctionComponent, useMemo } from 'react';
import styles from './CartRow.module.scss';

type CartRowProps = {
  imgPath: string;
  name: string;
  quantity: number;
  onIncreaseQuantity: () => void;
  onDecreaseQuantity: () => void;
  onRemoveProduct: () => void;
};

export const CartRow: FunctionComponent<CartRowProps> = ({
  imgPath = '',
  name = '',
  quantity = 0,
  onIncreaseQuantity = () => null,
  onDecreaseQuantity = () => null,
  onRemoveProduct = () => null,
}) => {
  const decreaseButtonColor = useMemo(() => (quantity > 1 ? 'action' : 'disabled'), [quantity]);
  return (
    <div className={styles.CartRowContainer}>
      <img src={imgPath} alt="cart-row-img" className={styles.ProductImg} />

      <div className={styles.ProductInfo}>
        <div className={styles.ProductName}>{name}</div>
        <div className={styles.ProductQuantity}>
          Quantity: {quantity} <AddBox color="action" onClick={onIncreaseQuantity} className={styles.QuantityIcon} />
          <IndeterminateCheckBox
            color={decreaseButtonColor}
            onClick={onDecreaseQuantity}
            className={styles.QuantityIcon}
          />
        </div>
      </div>

      <IconButton color="primary" aria-label="remove from shopping cart" onClick={onRemoveProduct}>
        <RemoveCircleOutline />
      </IconButton>
    </div>
  );
};

export default CartRow;
