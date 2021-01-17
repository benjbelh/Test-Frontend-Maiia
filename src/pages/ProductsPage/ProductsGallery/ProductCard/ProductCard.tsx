import React, { useCallback, FC } from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import styles from './ProductCard.module.scss';
import { AddShoppingCart } from '@material-ui/icons';

type ProductCardProps = {
  id: number;
  name: string;
  picturePath?: string;
};

const ProductCard: FC<ProductCardProps> = ({ id = 0, name = '', picturePath = '' }) => {
  const history = useHistory();

  const onProductSelected = useCallback(
    (productId) => {
      //TODO IMPLEMENT ADD TO CART
      console.log(productId);
    },
    [history],
  );

  return (
    <Card className={styles.card} data-testid={`product-${id}`}>
      <CardActionArea onClick={() => onProductSelected(id)}>
        {picturePath && <CardMedia className={styles.media} image={picturePath} title={name} />}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={styles.cardActions}>
        <IconButton color="primary" aria-label="add to shopping cart" onClick={() => onProductSelected(id)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
