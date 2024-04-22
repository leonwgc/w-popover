import type { MountContainerType, Placement } from './types';
export declare const isNumber: (n: string | number) => boolean;
/**
 * Get Popover mount container.
 * @param {MountContainerType} container
 * @return {*}  {HTMLElement}
 */
export declare const getMountContainer: (container: MountContainerType) => HTMLElement;
/**
 * Get transform origin position.
 * @param placement
 * @returns
 */
export declare const getTransformPosition: (placement: Placement) => string;
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
export declare function attachPropertiesToComponent<C, P extends Record<string, any>>(component: C, properties: P): C & P;
