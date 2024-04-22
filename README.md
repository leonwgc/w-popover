### Features

1. Based on React hooks
2. Small size, zero 3rd-party library dependencies.

## Usage

```jsx
import React, { useState } from 'react';
import Popover from '../src/Popover';

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Popover
        placement="bottom-right"
        visible={visible}
        onClose={() => setVisible(false)}
        closeOnClickOutside
        content="This is ReactNode content."
      >
        <button onClick={() => setVisible(true)}>Anchor to trigger Popover to showup</button>
      </Popover>
    </div>
  );
```

## Props Definition

```js
type Props = {
  /** Popover display position. default: bottom */
  placement?: Placement,
  /** Trigger element，If a component been used please specify the the forwardRef to inner DOM element */
  children: React.ReactElement,
  /** Content to show */
  content?: React.ReactNode,
  /** Whether to show the popover */
  visible?: boolean,
  /** Visibility change callback */
  onVisibleChange?: (visible: boolean) => void,
  /** Whether to show arrow */
  arrow?: boolean,
  /** Whether to show close button on upper right of the popover. */
  closable?: boolean,
  /** Popover container style to apply */
  style?: React.CSSProperties,
  /** Trigger to unmount the popover */
  onClose?: () => void,
  /** Popover container css classname to apply */
  className?: string,
  /** Whether to show a mask layer below the popover.  */
  mask?: boolean,
  /** Mask style if mask is enabled. */
  maskStyle?: React.CSSProperties,
  /** Mask css className if mask is enabled. */
  maskClass?: string,
  /** Manually set a left,top offset to popover
   * type Offset = { x?: number; y?: number }; */
  offset?: Offset,
  /**
   * Whether to close the Popover when click outside area.
   * @default true
   * */
  closeOnClickOutside?: boolean,
  /**
   *  Whether to close the Popover when click mask area.
   * @default true
   * */
  closeOnMaskClick?: boolean,
  /**
   *  Whether to enable entrance transition effect.
   * @default true
   *  */
  transition?: boolean,
  /**
   *  Transition duration time. default: 200 ms
   */
  transitionDuration?: number,
};

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
```
