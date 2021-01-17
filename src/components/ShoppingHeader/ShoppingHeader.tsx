import { AppBar, Badge, IconButton, Toolbar, Typography } from '@material-ui/core';
import { ShoppingBasket } from '@material-ui/icons';
import React, { FunctionComponent } from 'react';
import styles from './ShoppingHeader.module.scss';

type ShoppingHeaderProps = {
  title?: string;
};

export const ShoppingHeader: FunctionComponent<ShoppingHeaderProps> = ({ title = '' }) => (
  <AppBar position="sticky">
    <Toolbar>
      <Typography variant="h6" className={styles.ShoppingHeaderTitle}>
        {title}
      </Typography>
      <IconButton aria-label="shooping cart" color="inherit">
        <Badge badgeContent={4} color="secondary">
          <ShoppingBasket />
        </Badge>
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default ShoppingHeader;
