import React from 'react';
import type { Props as PopoverProps } from './Popover';
export declare type Props = Omit<PopoverProps, 'children' | 'onVisibleChange' | 'closeOnClickOutside'> & {
    /** 定位坐标 left */
    left?: number | string;
    /** 定位坐标 top */
    top?: number | string;
    /** 定位元素 or querySelector选择器 or ref */
    anchor?: Element | string | React.MutableRefObject<Element>;
};
declare type Action = () => void;
export declare const noop: () => void;
export declare let hide: Action;
export declare const show: (props: Props) => (() => void);
export {};
