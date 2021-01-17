import React, { useCallback, FC } from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import styles from './ProductCard.module.scss';

type ProductCardProps = {
  id: string;
  name: string;
  picturePath: string;
};

const ProductCard: FC<ProductCardProps> = ({ id = '', name = '', picturePath = '' }) => {
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
      <CardActions>
        <Button size="small" color="primary" onClick={() => onProductSelected(id)}>
          ADD PRODUCT
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
