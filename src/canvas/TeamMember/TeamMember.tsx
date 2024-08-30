import { UniformText } from '@uniformdev/canvas-next-rsc/component';
import { TeamMemberProps } from '.';

export function TeamMember({ context, component }: TeamMemberProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <UniformText context={context} component={component} parameterId="name" as="h1" className="text-2xl" />
      <UniformText context={context} component={component} parameterId="description" as="p" />
    </div>
  );
}
