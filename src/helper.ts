import type { MountContainerType, Placement } from './types';
import getOppositePosition from './utils/getReversePosition';

export const isNumber = (n: string | number): boolean => {
  return Object.prototype.toString.call(n) === '[object Number]' && n === n;
};

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

/**
 * Get transform origin position.
 * @param placement
 * @returns
 */
export const getTransformPosition = (placement: Placement): string => {
  const pos = placement.split('-');

  let ret = '';

  if (pos[0]) {
    ret += getOppositePosition[pos[0]];
  }

  if (pos[1]) {
    ret += ' ' + pos[1];
  }

  return ret;
};

/**
 * attach static props to component
 *
 * @export
 * @template C
 * @template P
 * @param {C} component
 * @param {P} properties
 * @return {*}  {(C & P)}
 */
export function attachPropertiesToComponent<C, P extends Record<string, any>>(
  component: C,
  properties: P
): C & P {
  const ret = component as any;
  for (const key in properties) {
    if (properties.hasOwnProperty(key)) {
      ret[key] = properties[key];
    }
  }
  return ret;
}
