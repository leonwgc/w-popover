import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import useLatest from './useLatest';
import useUpdateEffect from './useUpdateEffect';
import { getElement, applyStyleOrClsToElement } from './dom';

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
  el: HTMLElement | (() => HTMLElement) | React.MutableRefObject<HTMLElement>,
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

  useLayoutEffect(() => {
    const el = getElement(latestEl);
    if (visible) {
      applyStyleOrClsToElement(el, fromRef.current, toRef.current);
      setActive(true);

      timerRef.current = window.setTimeout(() => {
        applyStyleOrClsToElement(el, toRef.current, fromRef.current);
      }, delay);
    }
  }, [visible, active, fromRef, toRef, latestEl, delay]);

  useUpdateEffect(() => {
    if (!visible) {
      if (active) {
        const el = getElement(latestEl);
        timerRef.current = window.setTimeout(() => {
          applyStyleOrClsToElement(el, fromRef.current, toRef.current);
          timerRef.current = window.setTimeout(() => {
            setActive(false);
          }, duration);
        }, delay);
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

  return active || visible;
}
