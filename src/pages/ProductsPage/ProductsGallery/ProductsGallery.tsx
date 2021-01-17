import React, { FC } from 'react';
import styles from './ProductsGallery.module.scss';
import ProductCard from './ProductCard/ProductCard';
import { IProduct } from 'store/Products/reducer';
import SkeletonCardList from 'components/SkeletonCardList';

type ProductsGalleryProps = {
  productList?: IProduct[] | null;
  isLoading?: boolean;
};

const ProductsGallery: FC<ProductsGalleryProps> = ({ productList = null, isLoading = true }) => {
  return (
    <>
      <div className={styles.productList} data-testid="product-list">
        {isLoading || !productList ? (
          <SkeletonCardList cardNumber={15} />
        ) : (
          productList.map(({ id, title, url }) => <ProductCard key={id} id={id} name={title} picturePath={url} />)
        )}
      </div>
    </>
  );
};

export default ProductsGallery;
