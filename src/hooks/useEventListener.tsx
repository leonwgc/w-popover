import { useEffect } from 'react';
import { getEventTarget } from './dom';
import useLatest from './useLatest';
import { EventTargetType } from 'src/types';

/**
 * Add event listener for a target.
 * @export
 * @param {EventTarget} target target elemenet, if not availabel, fallback to window.
 * @param {string}  event  event type e.g. 'click'
 * @param {(e:Event) => void} [handler] event handler
 * @param {(boolean | AddEventListenerOptions)} options of the 3rd parameter in addEventListener func.
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useEventListener(
  target: EventTargetType,
  type: string,
  handler?: (e: Event) => void,
  options?: boolean | any
) {
  const handlerRef = useLatest(handler);
  const typeRef = useLatest(type);
  const targetRef = useLatest(target);
  const optionsRef = useLatest(options);

  useEffect(() => {
    const targetElement = getEventTarget(targetRef.current, window);
    if (!targetElement?.addEventListener) {
      return;
    }

    const eventListener = (e: Event) => {
      return handlerRef.current?.(e);
    };

    const type = typeRef.current;
    const options = optionsRef.current;

    targetElement.addEventListener(type, eventListener, options);

    return () => {
      targetElement.removeEventListener(type, eventListener, options);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
