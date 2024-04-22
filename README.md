### 特点

1. 基于 React hooks
2. 体积小，不依赖第三方库

## demo
```jsx
import React, { useState } from 'react';
import Popover from 'w-popover';
import DemoBlock from './DemoBlock';
import PageWrap from './PageWrap';

export default function App() {
  const [visible, setVisible] = useState(true);

  return (
    <PageWrap>
      <DemoBlock title="Simple usage">
        <div>
          <Popover
            placement="bottom-right"
            visible={visible}
            content="I'm here"
            style={{ padding: 6, width: 150, height: 44, background: '#999', color: '#fff' }} // popover container style
          >
            <div
              role="button"
              style={{
                padding: '6px 12px',
                display: 'inline-flex',
                alignItems: 'center',
                height: 30,
                border: '1px dashed',
              }}
              onClick={() => setVisible(true)}
            >
              This is anchor button to trigger Popover to showup
            </div>
          </Popover>
        </div>
      </DemoBlock>
    </PageWrap>
  );
}

```

## Props 定义

```js
type Props = {
  /** 弹框位置, 默认bottom */
  placement?: Placement,
  /** 触发元素，如果是组件，需要forwardRef到dom */
  children: React.ReactElement,
  /** 弹框内容 */
  content?: React.ReactNode,
  /** 弹框内容是否显示 */
  visible?: boolean,
  /** visible状态变化回调 */
  onVisibleChange?: (visible: boolean) => void,
  /** arrow是否显示 */
  arrow?: boolean,
  /** 关闭按钮是否显示 */
  closable?: boolean,
  /** 外层容器组件style */
  style?: React.CSSProperties,
  /** 关闭回调 */
  onClose?: () => void,
  className?: string,
  /** 是否显示遮罩 */
  mask?: boolean,
  /** 遮罩样式 */
  maskStyle?: React.CSSProperties,
  /** 遮罩class*/
  maskClass?: string,
  /** 弹框自定义偏移 type Offset = { x?: number; y?: number }; */
  offset?: Offset,
  /**
   * 点击外部区域是否关闭
   * @default true
   * */
  closeOnClickOutside?: boolean,
  /**
   * 点击遮罩是否关闭
   * @default true
   * */
  closeOnMaskClick?: boolean,
  /**
   * 入场过渡动画是否开启
   * @default true
   *  */
  transition?: boolean,
  /**
   *  入场动画持续时间 200
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
