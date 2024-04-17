import React, { useState, useEffect } from 'react';
import useLatest from './useLatest';
import useUpdateEffect from './useUpdateEffect';

const getElement = (elRef) => {
  const el = elRef.current;
  let dom;
  if (el instanceof Element) {
    dom = el;
  } else if (el.current) {
    dom = el.current;
  } else if (typeof el === 'function') {
    dom = el();
  }

  return dom;
};

const applyStyleToElement = (el: HTMLElement, styleOrCls: React.CSSProperties | string) => {
  if (typeof styleOrCls === 'object' && styleOrCls) {
    for (const key of Object.keys(styleOrCls)) {
      el.style[key] = styleOrCls[key];
    }
  } else if (typeof styleOrCls === 'string') {
    el.classList.add(styleOrCls);
  }
};

/**
 * Apply transition effect to el
 * @param el
 * @param visible
 * @param from
 * @param to
 * @param duration
 * @returns true if el is shown or in transition status
 */
export default function useTransition(
  el: Element | (() => Element) | React.MutableRefObject<Element>,
  visible: boolean,
  from: string | React.CSSProperties,
  to: string | React.CSSProperties,
  duration = 220
): boolean {
  const [active, setActive] = useState(visible);
  const latestEl = useLatest(el);

  const fromRef = useLatest(from);
  const toRef = useLatest(to);

  useUpdateEffect(() => {
    if (!visible) {
      if (active) {
        const el = getElement(latestEl);
        applyStyleToElement(el, fromRef.current);
        setTimeout(() => {
          setActive(false);
        }, duration);
      }
    }
  }, [visible]);

  useEffect(() => {
    const el = getElement(latestEl);
    if (visible) {
      applyStyleToElement(el, fromRef.current);
      setActive(true);

      requestAnimationFrame(() => {
        setTimeout(() => {
          applyStyleToElement(el, toRef.current);
        }, 0);
      });
    } else {
      if (active) {
        applyStyleToElement(el, fromRef.current);
      }
    }
  }, [visible, active, fromRef, toRef, latestEl]);

  return active || visible;
}
