import { useState, useEffect } from 'react';
import useLatest from './useLatest';
import useUpdateEffect from './useUpdateEffect';

const getElement = (elRef) => {
  const el = elRef.current;
  let dom;
  if (el instanceof Element) {
    dom = el;
  } else if (el.current) {
    dom = el.current;
  } else if (typeof el.current === 'function') {
    dom = el.current();
  }

  return dom;
};

/**
 *
 * @param el
 * @param visible
 * @param opacity
 */
export default function useFadeIn(el, visible = false, opacity = 1, duration = 1000): boolean {
  const [active, setActive] = useState(visible);
  const latestEl = useLatest(el);

  useUpdateEffect(() => {
    if (!visible) {
      if (active) {
        const el = getElement(latestEl);
        el.style.opacity = 0;
        setTimeout(() => {
          setActive(false);
        }, duration);
      }
    }
  }, [visible]);

  useEffect(() => {
    const el = getElement(latestEl);
    if (visible) {
      el.style.opacity = 0;
      setActive(true);

      requestAnimationFrame(() => {
        setTimeout(() => {
          el.style.opacity = opacity;
        }, 0);
      });
    } else {
      if (active) {
        el.style.opacity = 0;
      }
    }
  }, [visible, active, opacity, latestEl]);

  return active || visible;
}
