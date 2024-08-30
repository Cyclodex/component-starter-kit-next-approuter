import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { Product } from './Product';

export type ProductProps = ComponentProps<{
  name: string;
  description: string;
  shopifyProducts: {
    entities: [{ id: string }];
  };
}>;

export const productMappings = {
  product: Product,
};

export default Product;
