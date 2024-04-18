import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
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

const applyStyleOrClsToElement = (
  el: HTMLElement,
  styleOrCls: React.CSSProperties | string,
  toBeRemovedCls
) => {
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

/**
 * Apply transition effect to el
 * @param el
 * @param visible
 * @param from
 * @param to
 * @param duration ms
 * @param delay  ms, default 0
 * @returns true if el is shown or in transition status
 */
export default function useTransition(
  el: Element | (() => Element) | React.MutableRefObject<Element>,
  visible: boolean,
  from: string | React.CSSProperties,
  to: string | React.CSSProperties,
  duration = 220,
  delay = 0
): boolean {
  const [active, setActive] = useState(visible);
  const latestEl = useLatest(el);
  const timerRef = useRef(0);

  const fromRef = useLatest(from);
  const toRef = useLatest(to);

  useUpdateEffect(() => {
    if (!visible) {
      if (active) {
        const el = getElement(latestEl);
        applyStyleOrClsToElement(el, fromRef.current, toRef.current);
        timerRef.current = window.setTimeout(() => {
          setActive(false);
        }, duration + delay);
      }
    }
  }, [visible]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  useLayoutEffect(() => {
    const el = getElement(latestEl);
    if (visible) {
      applyStyleOrClsToElement(el, fromRef.current, toRef.current);
      setActive(true);

      timerRef.current = window.setTimeout(() => {
        applyStyleOrClsToElement(el, toRef.current, fromRef.current);
      }, 0);
    } else {
      if (active) {
        applyStyleOrClsToElement(el, fromRef.current, toRef.current);
      }
    }
  }, [visible, active, fromRef, toRef, latestEl]);

  return active || visible;
}
