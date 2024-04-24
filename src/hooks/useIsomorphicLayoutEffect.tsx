import { useEffect, useLayoutEffect } from 'react';
import { isBrowser } from '../dom';

/**
 * useLayoutEffect for client & server side.
 *
 */
const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
