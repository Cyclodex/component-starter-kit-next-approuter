import { ComponentProps, UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import { ProductProps } from '.';

type SlotNames = 'product';
type Parameters = ProductProps;
type Props = ComponentProps<Parameters, SlotNames>;

function Product({ slots, shopifyProduct, component, context }: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl">Showcase product</h1>
      <div className="bg-red-300 p-5">
        <UniformSlot context={context} slot={slots.product} data={component} />
      </div>
      <p className="text-center">
        <br />
        Above product title is looked up using data resources.
        <br />
        The output comes from a slot and therefor is a rendered component.
        <br />
        The product itself is selected by the editor using a shopify integration, giving us back the product ID only.
        <br />
        <br />
      </p>
      <h2>The ID of the selected entry is:</h2>
      <ul>
        {shopifyProduct?.entities.map(product => (
          <li key={product.id}>
            <h1 className="text-2xl">{product.id}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { Product };
