/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Dispose, renderElement } from './dom';
import Popover from './Popover';
import type { Props as PopoverProps } from './Popover';

export type Props = Omit<PopoverProps, 'children' | 'onVisibleChange' | 'closeOnClickOutside'> & {
  /** 定位坐标 left */
  left?: number | string;
  /** 定位坐标 top */
  top?: number | string;
  /** 定位元素 or querySelector选择器 or ref */
  anchor?: Element | string | React.MutableRefObject<Element>;
};

type Action = () => void;

export const noop = () => {};

export let hide: Action = noop;

const isNumber = (n) => {
  return Object.prototype.toString.call(n) === '[object Number]' && n === n;
};
/**
 * 静态调用
 *
 * @param {Props} props
 * @return {*}  {(() => void)}
 */
export const show = (props: Props): (() => void) => {
  let { left: x, top: y, anchor, placement = 'top', style, ...rest } = props;

  const div = document.createElement('div');

  if (hide) {
    hide?.();
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
      style={{ padding: 20, ...style }}
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
        className="uc-popover-anchor"
      />
    </Popover>,
    div
  );

  hide = dispose;

  return dispose;
};
