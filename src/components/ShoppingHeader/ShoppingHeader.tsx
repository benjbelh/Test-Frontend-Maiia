import { AppBar, Badge, Fade, IconButton, Paper, Popper, Toolbar, Typography } from '@material-ui/core';
import { ShoppingBasket } from '@material-ui/icons';
import CartContainer from 'components/CartContainer';
import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { cartItemNumberSelector } from 'store/Cart/selectors';
import styles from './ShoppingHeader.module.scss';

type ShoppingHeaderProps = {
  title?: string;
};

export const ShoppingHeader: FunctionComponent<ShoppingHeaderProps> = ({ title = '' }) => {
  const cartItemNumber = useSelector(cartItemNumberSelector);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" className={styles.ShoppingHeaderTitle}>
          {title}
        </Typography>
        <IconButton aria-label="shooping cart" color="inherit" onClick={handleClick}>
          <Badge badgeContent={cartItemNumber} color="secondary">
            <ShoppingBasket />
          </Badge>
        </IconButton>
        <Popper
          placement="bottom-end"
          disablePortal={false}
          modifiers={{
            flip: {
              enabled: true,
            },
            preventOverflow: {
              enabled: true,
              boundariesElement: 'scrollParent',
            },
          }}
          open={open}
          anchorEl={anchorEl}
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
                <CartContainer />
              </Paper>
            </Fade>
          )}
        </Popper>
      </Toolbar>
    </AppBar>
  );
};

export default ShoppingHeader;
