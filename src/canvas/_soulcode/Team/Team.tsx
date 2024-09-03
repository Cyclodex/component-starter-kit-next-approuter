import { UniformSlot, UniformText } from '@uniformdev/canvas-next-rsc/component';
import { TeamProps } from '.';

export type SlotNames = 'content';

export function Team({ context, component, slots }: TeamProps) {
  return (
    <div className="m-10 p-4 bg-blue-200">
      <div className="text-center">
        <UniformText context={context} component={component} parameterId="title" as="h1" className="text-2xl" />
        <UniformText context={context} component={component} parameterId="subtitle" as="p" className="italic" />
      </div>
      <div className="flex justify-around">
        <UniformSlot
          context={context}
          data={component}
          // this must correspond to the `public id` of the slot created earlier
          slot={slots.content}
        />
      </div>
    </div>
  );
}
