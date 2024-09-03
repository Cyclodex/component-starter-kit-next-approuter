import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { SlotNames, Team } from './Team';

export type TeamProps = ComponentProps<
  {
    title: string;
    subtitle: string;
  },
  SlotNames
>;

export const teamMappings = {
  team: Team,
};

export default Team;
