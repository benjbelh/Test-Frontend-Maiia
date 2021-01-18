import React, { useCallback, FC } from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core';
import styles from './ProductCard.module.scss';
import { AddShoppingCart } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { addToCart } from 'store/Cart/actions';

type ProductCardProps = {
  id: number;
  name: string;
  picturePath?: string;
};

const ProductCard: FC<ProductCardProps> = ({ id = 0, name = '', picturePath = '' }) => {
  const dispatch = useDispatch();

  const onProductSelected = useCallback(() => {
    dispatch(addToCart({ id, title: name, url: picturePath }));
  }, [dispatch, addToCart]);

  return (
    <Card className={styles.card} data-testid={`product-${id}`}>
      <CardActionArea>
        {picturePath && <CardMedia className={styles.media} image={picturePath} title={name} />}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={styles.cardActions}>
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          onClick={onProductSelected}
          data-testid={`product-${id}-cart-button`}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
