import { AppBar, Badge, ClickAwayListener, IconButton, Paper, Popper, Toolbar, Typography } from '@material-ui/core';
import { ShoppingBasket } from '@material-ui/icons';
import CartContainer from 'layout/CartContainer';
import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { cartItemNumberSelector } from 'store/Cart/selectors';
import styles from './ShoppingHeader.module.scss';

type ShoppingHeaderProps = {
  title?: string;
};

export const ShoppingHeader: FunctionComponent<ShoppingHeaderProps> = ({ title = '' }) => {
  const cartItemNumber = useSelector(cartItemNumberSelector);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    },
    [anchorEl],
  );

  const popperOpened = useMemo(() => Boolean(anchorEl), [anchorEl]);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" className={styles.ShoppingHeaderTitle}>
          {title}
        </Typography>
        <IconButton aria-label="shopping cart" color="inherit" onClick={handleClick} data-testid="shopping-cart">
          <Badge badgeContent={cartItemNumber} color="secondary">
            <ShoppingBasket />
          </Badge>
        </IconButton>
        <Popper placement="bottom-end" open={popperOpened} anchorEl={anchorEl}>
          <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
            <Paper>
              <CartContainer />
            </Paper>
          </ClickAwayListener>
        </Popper>
      </Toolbar>
    </AppBar>
  );
};

export default ShoppingHeader;
