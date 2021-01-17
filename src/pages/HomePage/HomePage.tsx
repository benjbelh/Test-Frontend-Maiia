import { Button } from '@material-ui/core';
import { KeyboardArrowRight } from '@material-ui/icons';
import React, { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './HomePage.module.scss';

const HomePage: FC<{}> = () => {
  const history = useHistory();

  const onButtonClick = useCallback(() => {
    history.push(`/products`);
  }, [history]);

  return (
    <div className={styles.HomePageContainer}>
      <div className={styles.HomePageContent}>
        <div className={styles.HomePageTitle}>
          <p className={styles.HomePageTitle}>
            OFFRONS-NOUS
            <br />
            LES PRODUITS
            <br />
            DE NOS RÊVES
          </p>
        </div>
        <Button
          variant="contained"
          endIcon={<KeyboardArrowRight />}
          size="large"
          onClick={onButtonClick}
          data-testid="product-page-access"
        >
          ACCEDER AU CATALOGUE
        </Button>
      </div>
    </div>
  );
};
export default HomePage;
