import React, { FC } from 'react';
import SkeletonCard from 'components/SkeletonCard/SkeletonCard';

type SkeletonCardListProps = {
  cardNumber: number;
};

export const SkeletonCardList: FC<SkeletonCardListProps> = ({ cardNumber = 4 }) => (
  <>
    {[...Array(cardNumber)].map((item, index) => (
      <SkeletonCard key={index} />
    ))}
  </>
);

export default SkeletonCardList;
