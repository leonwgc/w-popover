/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import type { Offset } from './utils/getModalStyle';

export type SinglePlacement = 'top' | 'bottom' | 'left' | 'right';

export type Placement =
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

export type MountContainerType =
  | HTMLElement
  | (() => HTMLElement)
  | React.MutableRefObject<HTMLElement>;

export type PopoverProps = {
  /** Popover display position. default: bottom */
  placement?: Placement;
  /** Trigger element，If a component been used please specify the the forwardRef to inner DOM element */
  children: React.ReactElement;
  /** Content to show */
  content?: React.ReactNode;
  /** Whether to show the popover */
  visible?: boolean;
  /** Visibility change callback */
  onVisibleChange?: (visible: boolean) => void;
  /** Whether to show arrow */
  arrow?: boolean;
  /** Whether to show close button on upper right of the popover. */
  closable?: boolean;
  /** Popover container style to apply */
  style?: React.CSSProperties;
  /** Trigger to unmount the popover */
  onClose?: () => void;
  /** Popover container css classname to apply */
  className?: string;
  /** Whether to show a mask layer below the popover.  */
  mask?: boolean;
  /** Mask style if mask is enabled. */
  maskStyle?: React.CSSProperties;
  /** Mask css className if mask is enabled. */
  maskClass?: string;
  /** Manually set a left,top offset to popover
   * type Offset = { x?: number; y?: number }; */
  offset?: Offset;
  /**
   * Whether to close the Popover when click outside area.
   * @default true
   * */
  closeOnClickOutside?: boolean;
  /**
   *  Whether to close the Popover when click mask area.
   * @default true
   * */
  closeOnMaskClick?: boolean;
  /**
   *  Whether to enable entrance transition effect.
   * @default true
   *  */
  transition?: boolean;
  /**
   *  Transition duration time. default: 220 ms
   */
  transitionDuration?: number;
  /**
   *  transitionTimingFunction. default: ease-in-out
   */
  transitionTimingFunction?: string;
};

export type TargetType = HTMLElement | (() => HTMLElement) | React.MutableRefObject<HTMLElement>;

export type EventTargetType =
  | EventTarget
  | React.MutableRefObject<EventTarget>
  | (() => EventTarget);

export type ShowProps = Omit<
  PopoverProps,
  'children' | 'onVisibleChange' | 'closeOnClickOutside'
> & {
  left?: number | string;
  top?: number | string;
  anchor?: Element | string | React.MutableRefObject<Element>;
};

export type TooltipProps = {
  hoverDelay?: number;
} & PopoverProps;
