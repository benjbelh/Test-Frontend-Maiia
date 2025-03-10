import React, { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readProductList } from 'store/Products/actions';
import { isLoadingSelector, productsSelector } from 'store/Products/selectors';
import ProductsGallery from './ProductsGallery';
import styles from './ProductsPage.module.scss';
import { Pagination } from '@material-ui/lab';
import ShoppingHeader from 'layout/ShoppingHeader';
import { IProduct } from 'shared/models';

const ProductsPage: FC<{}> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readProductList());
  }, []);

  const productList = useSelector(productsSelector);
  const isLoading = useSelector(isLoadingSelector);

  const numberPerPage = 15;

  const [pageCount, setPageCount] = useState(0);
  const [offset, setOffset] = useState(0);
  const [currentData, setCurrentData] = useState<IProduct[] | null>(null);

  useEffect(() => {
    setPageCount(Math.ceil(productList.length / numberPerPage));
    setCurrentData(productList.slice(offset, offset + numberPerPage));
  }, [productList, numberPerPage, offset]);

  const handlePageClick = useCallback(
    (event: ChangeEvent<unknown>, value: number) => {
      const offset = (value - 1) * numberPerPage;
      setOffset(offset);
    },
    [numberPerPage],
  );

  return (
    <>
      <ShoppingHeader title="E-Commerce Shop" />
      <div className={styles.ProductsPageContainer}>
        <h3 className={styles.ProductsPageTitle}>PRODUCT GALLERY</h3>
        <ProductsGallery productList={currentData} isLoading={isLoading} />
        <Pagination
          count={pageCount}
          defaultPage={0}
          boundaryCount={2}
          onChange={handlePageClick}
          className={styles.Pagination}
        />
      </div>
    </>
  );
};

export default ProductsPage;
