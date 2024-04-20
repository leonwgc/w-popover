import { ShowProps } from './types';
/**
 *  关闭popover
 *
 */
export declare const hide: () => void;
/**
 * Static method of Popover
 *
 * @param {ShowProps} props
 * @return {*}  hide popover fun.
 */
export declare const show: (props: ShowProps) => (() => void);
