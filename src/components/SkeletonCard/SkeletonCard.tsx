import React, { FC } from 'react';
import { Card, CardActionArea, CardActions, CardContent } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import styles from './SkeletonCard.module.scss';

const SkeletonCard: FC<{}> = () => (
  <Card className={styles.card}>
    <CardActionArea>
      <Skeleton variant="rect" height={250} />
      <CardContent>
        <Skeleton animation="wave" />
        <Skeleton animation="wave" width="60%" />
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Skeleton animation="wave" width="30%" height={30} />
    </CardActions>
  </Card>
);

export default SkeletonCard;
