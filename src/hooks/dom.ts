import React from 'react';
import { TargetType } from 'src/types';

/**
 * Get target element.
 * @param elRef
 * @returns
 */
export const getElement = (elRef: React.MutableRefObject<TargetType>): HTMLElement => {
  const el = elRef.current;
  let dom;
  if (el instanceof HTMLElement) {
    dom = el;
  } else if ((el as React.MutableRefObject<HTMLElement>).current) {
    dom = (el as React.MutableRefObject<HTMLElement>).current;
  } else if (typeof el === 'function') {
    dom = el();
  }

  return dom;
};

/**
 * Get event target.
 * @param target
 * @param defaultTarget
 * @returns
 */
export const getEventTarget = (target, defaultTarget): Element => {
  if (!target) {
    return defaultTarget;
  }

  let targetElement;

  if (typeof target === 'function') {
    targetElement = target();
  } else if (target && 'current' in target) {
    targetElement = target.current;
  } else {
    targetElement = target;
  }

  return targetElement;
};

/**
 * Apply style / className to element.
 * @param el
 * @param styleOrCls
 * @param toBeRemovedCls
 */
export const applyStyleOrClsToElement = (
  el: HTMLElement,
  styleOrCls: React.CSSProperties | string,
  toBeRemovedCls?: React.CSSProperties | string
): void => {
  if (typeof styleOrCls === 'object' && styleOrCls) {
    for (const key of Object.keys(styleOrCls)) {
      el.style[key] = styleOrCls[key];
    }
  } else if (typeof styleOrCls === 'string') {
    el.classList.add(styleOrCls);

    if (
      typeof toBeRemovedCls === 'string' &&
      toBeRemovedCls &&
      el.classList.contains(toBeRemovedCls)
    ) {
      el.classList.remove(toBeRemovedCls);
    }
  }
};
