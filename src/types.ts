/* eslint-disable @typescript-eslint/no-explicit-any */
export type SinglePlacement = 'top' | 'bottom' | 'left' | 'right';

export type Placement =
  | 'top'
  | 'left'
  | 'bottom'
  | 'right'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'left-top'
  | 'left-bottom'
  | 'right-top'
  | 'right-bottom'
  | SinglePlacement;

export interface ITargetPos {
  left: number;
  top: number;
  width: number;
  height: number;
}

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
