import React from 'react';
/**
 * Apply transition effect to el
 * @param el
 * @param visible
 * @param from
 * @param to
 * @param duration unit: ms
 * @param delay  time to wait before animation. unit: ms
 * @returns true if el is shown or in transition status
 */
export default function useCSSTransition(
  el: Element | (() => Element) | React.MutableRefObject<Element>,
  visible: boolean,
  from: string | React.CSSProperties,
  to: string | React.CSSProperties,
  duration?: number,
  delay?: number
): boolean;
