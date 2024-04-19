import type { MountContainerType, Placement } from './types';

const isObject = (obj) => Object.prototype.toString.call(obj) === '[object Object]';
/**
 * Get Popover mount container.
 * @param {MountContainerType} container
 * @return {*}  {HTMLElement}
 */
export const getMountContainer = (container: MountContainerType): HTMLElement => {
  let mountNode;

  if (container instanceof HTMLElement) {
    mountNode = container;
  } else if (isObject(container) && 'current' in container) {
    mountNode = container.current;
  } else if (typeof container === 'function') {
    mountNode = container?.();
  }

  return mountNode;
};

const aniMap = {
  top: 'bottom',
  bottom: 'top',
  left: 'right',
  right: 'left',
};

/**
 * Get transform origin position.
 * @param placement
 * @returns
 */
export const getTransformPosition = (placement: Placement): string => {
  const pos = placement.split('-');

  let ret = '';

  if (pos[0]) {
    ret += aniMap[pos[0]];
  }

  if (pos[1]) {
    ret += ' ' + pos[1];
  }

  return ret;
};
