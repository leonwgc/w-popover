import React from 'react';
import Popover from './Popover';
import { Dispose, renderElement } from './dom';
import { isNumber } from './helper';
import { ShowProps } from './types';

let _hide;

/**
 *  关闭popover
 *
 */
export const hide = (): void => {
  if (typeof _hide === 'function') {
    _hide();
  }
};

/**
 * Static method of Popover
 *
 * @param {ShowProps} props
 * @return {*}  hide popover fun.
 */
export const show = (props: ShowProps): (() => void) => {
  const { left, top, placement = 'top', style, ...rest } = props;
  let anchor = props.anchor,
    x = left,
    y = top;

  const div = document.createElement('div');

  if (_hide) {
    _hide?.();
  }

  let w = 0;
  let h = 0;

  if (!isNumber(x) || !isNumber(y)) {
    if (anchor) {
      if (typeof anchor === 'string') {
        anchor = document.querySelector(anchor);
      } else if ('current' in anchor) {
        anchor = (anchor as React.MutableRefObject<Element>).current;
      }
      if (anchor instanceof Element) {
        const { left, top, width, height } = anchor.getBoundingClientRect();
        x = left;
        y = top;
        w = width;
        h = height;
      } else {
        throw Error('no anchor found');
      }
    } else {
      throw Error('no anchor / left,top');
    }
  }

  const dispose: Dispose = renderElement(
    <Popover
      closeOnClickOutside={false}
      onClose={() => dispose()}
      visible
      transition={false}
      style={style}
      placement={placement}
      {...rest}
    >
      <span
        style={{
          position: 'fixed',
          left: x,
          top: y,
          width: w,
          height: h,
          visibility: 'hidden',
          pointerEvents: 'none',
        }}
        className="w-popover__anchor"
      />
    </Popover>,
    div
  );

  _hide = dispose;

  return dispose;
};
