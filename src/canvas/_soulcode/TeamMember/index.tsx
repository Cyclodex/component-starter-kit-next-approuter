import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { TeamMember } from './TeamMember';

export type TeamMemberProps = ComponentProps<{
  name: string;
  description: string;
}>;

export const teamMemberMappings = {
  teamMember: TeamMember,
};

export default TeamMember;
