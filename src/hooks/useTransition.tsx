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
 *
 * @param el
 * @param visible
 * @param opacity
 */
export default function useFadeIn(
  el: any,
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
        // el.style.opacity = 0;
        applyStyleToElement(el, from);
        setTimeout(() => {
          setActive(false);
        }, duration);
      }
    }
  }, [visible]);

  useEffect(() => {
    const el = getElement(latestEl);
    if (visible) {
      // el.style.opacity = 0;
      applyStyleToElement(el, from);
      setActive(true);

      requestAnimationFrame(() => {
        setTimeout(() => {
          // el.style.opacity = opacity;
          applyStyleToElement(el, to);
        }, 0);
      });
    } else {
      if (active) {
        // el.style.opacity = 0;
        applyStyleToElement(el, from);
      }
    }
  }, [visible, active, from, to, latestEl]);

  return active || visible;
}
