import React from 'react';
import { PopoverProps } from './types';
declare const _default: ((
  props: PopoverProps
) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & {
  show: (props: import('./types').ShowProps) => () => void;
  hide: () => void;
};
export default _default;
