import { useState, useLayoutEffect } from 'react';
import useLatest from './useLatest';
import useUpdateEffect from './useUpdateEffect';

const getDom = (latestEl) => {
  let dom;
  if (latestEl.current instanceof HTMLElement) {
    dom = latestEl.current;
  } else if (latestEl.current.current) {
    dom = latestEl.current.current;
  } else if (typeof latestEl.current === 'function') {
    dom = latestEl.current.current();
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
        const dom = getDom(latestEl);
        dom.style.opacity = 0;
        setTimeout(() => {
          setActive(false);
        }, duration);
      }
    }
  }, [visible]);

  useLayoutEffect(() => {
    const dom = getDom(latestEl);

    if (visible) {
      dom.style.opacity = 0;
      setActive(true);

      requestAnimationFrame(() => {
        setTimeout(() => {
          dom.style.opacity = opacity;
        }, 0);
      });
    } else {
      if (active) {
        dom.style.opacity = 0;
      }
    }
  }, [visible, active, opacity, latestEl]);

  return active || visible;
}
