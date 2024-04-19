import React from 'react';
import type { Offset } from './utils/getModalStyle';
export declare type SinglePlacement = 'top' | 'bottom' | 'left' | 'right';
export declare type Placement =
  | 'top'
  | 'left'
  | 'bottom'
  | 'right'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'left-top'
  | 'left-bottom'
  | 'right-top'
  | 'right-bottom'
  | SinglePlacement;
export interface ITargetPos {
  left: number;
  top: number;
  width: number;
  height: number;
}
export declare type MountContainerType =
  | HTMLElement
  | (() => HTMLElement)
  | React.MutableRefObject<HTMLElement>;
/**
 * attach static props to component
 *
 * @export
 * @template C
 * @template P
 * @param {C} component
 * @param {P} properties
 * @return {*}  {(C & P)}
 */
export declare function attachPropertiesToComponent<C, P extends Record<string, any>>(
  component: C,
  properties: P
): C & P;
export declare type PopoverProps = {
  /** 弹框位置,默认bottom */
  placement?: Placement;
  /** 触发元素，如果是组件，需要forwardRef到dom */
  children: React.ReactElement;
  /** 弹框内容 */
  content?: React.ReactNode;
  /** 弹框内容是否显示 */
  visible?: boolean;
  /** visible状态变化回调 */
  onVisibleChange?: (visible: boolean) => void;
  /** arrow是否显示 */
  arrow?: boolean;
  /** 关闭按钮是否显示 */
  closable?: boolean;
  /** container style */
  style?: React.CSSProperties;
  /**  关闭回调 */
  onClose?: () => void;
  className?: string;
  /** 是否显示遮罩 */
  mask?: boolean;
  /** 遮罩样式 */
  maskStyle?: React.CSSProperties;
  /** 遮罩class*/
  maskClass?: string;
  /** 弹框自定义偏移 */
  offset?: Offset;
  /**
   * 弹框挂载节点
   * @default document.body
   */
  mountContainer?: MountContainerType;
  /**
   * 点击外部区域是否关闭
   * @default true
   * */
  closeOnClickOutside?: boolean;
  /**
   * 点击遮罩是否关闭
   * @default true
   * */
  closeOnMaskClick?: boolean;
  /**
   * transition on / off
   * @default true
   *  */
  transition?: boolean;
  /**
   *  transitionDuration 200
   */
  transitionDuration?: number;
};
export declare type TargetType =
  | HTMLElement
  | (() => HTMLElement)
  | React.MutableRefObject<HTMLElement>;
export declare type EventTargetType =
  | EventTarget
  | React.MutableRefObject<EventTarget>
  | (() => EventTarget);
export declare type ShowProps = Omit<
  PopoverProps,
  'children' | 'onVisibleChange' | 'closeOnClickOutside'
> & {
  left?: number | string;
  top?: number | string;
  anchor?: Element | string | React.MutableRefObject<Element>;
};
