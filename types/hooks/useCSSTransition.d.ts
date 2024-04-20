import React from 'react';
/**
 * Add mounting transition effect to component.
 * @param el
 * @param visible when visible is true. run the mount transition.
 * @param from the start styles/class name.
 * @param to the end styles/class name.
 * @param duration transition duration. (unit: ms)
 * @param delay  time to wait before transiton. (unit: ms)
 * @returns boolean. true means the component is still active. false means the component need to be unmounted.
 */
export default function useCSSTransition(el: HTMLElement | (() => HTMLElement) | React.MutableRefObject<HTMLElement>, visible: boolean, from: string | React.CSSProperties, to: string | React.CSSProperties, duration?: number, delay?: number): boolean;
