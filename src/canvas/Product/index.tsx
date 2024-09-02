import { Product } from './Product';

export type ProductProps = {
  shopifyProduct: {
    entities: [{ id: string }];
  };
};

export const productMappings = {
  product: Product,
};

export default Product;
