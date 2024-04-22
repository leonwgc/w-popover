import { SinglePlacement } from '../types';

const map: Record<SinglePlacement, SinglePlacement> = {
  bottom: 'top',
  top: 'bottom',
  left: 'right',
  right: 'left',
};

/**
 * Get the opposite position.
 * @param position
 * @returns
 */
export const getOppositePosition = (position: SinglePlacement): SinglePlacement => {
  return map[position];
};

export default getOppositePosition;
