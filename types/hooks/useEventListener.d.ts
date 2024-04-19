import { EventTargetType } from 'src/types';
/**
 * Add event listener for a target.
 * @export
 * @param {EventTarget} target target elemenet, if not availabel, fallback to window.
 * @param {string}  event  event type e.g. 'click'
 * @param {(e:Event) => void} [handler] event handler
 * @param {(boolean | AddEventListenerOptions | undefined)} [options=undefined] options of the 3rd parameter in addEventListener func.
 */
export default function useEventListener(
  target: EventTargetType,
  type: string,
  handler?: (e: Event) => void,
  options?: any
): void;
