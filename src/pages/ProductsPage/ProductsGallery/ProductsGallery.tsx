import React, { FC } from 'react';
import styles from './ProductsGallery.module.scss';
import ProductCard from './ProductCard/ProductCard';
import SkeletonCard from '../../../components/SkeletonCard';

type IProduct = {
  id: string;
  title: string;
  url: string;
};

type ProductsGalleryProps = {
  productList: IProduct[] | null;
  isLoading: boolean;
};

const ProductsGallery: FC<ProductsGalleryProps> = ({ productList = [], isLoading = true }) => {
  return (
    <>
      <div className={styles.productList} data-testid="product-list">
        {isLoading || !productList
          ? [...Array(15)].map((item, index) => <SkeletonCard key={index} />)
          : productList.map(({ id, title, url }) => <ProductCard key={id} id={id} name={title} picturePath={url} />)}
      </div>
    </>
  );
};

export default ProductsGallery;
