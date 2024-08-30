import { ProductProps } from '.';

function Product({ context, component, shopifyProducts }: ProductProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Shopify products</h1>
      <div>
        {shopifyProducts.entities.map(product => (
          <div key={product.id}>{product.id}</div>
        ))}
      </div>
    </div>
  );
}

export { Product };
