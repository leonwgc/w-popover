import type { MountContainerType, Placement } from './types';
export declare const isNumber: (n: any) => boolean;
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
