export interface IProduct {
  id: number;
  title: string;
  url: string;
}

export type ICartItem = {
  product: IProduct;
  quantity: number;
};
