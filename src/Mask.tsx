import React, { ReactElement, useEffect, useRef, useImperativeHandle } from 'react';
import useCSSTransition from './hooks/useCSSTransition';

type Props = {
  /** 显示遮罩时，设置body.style.overflow为hidden
   * @default true
   */
  hideOverflow?: boolean;
  /** 是否可见 */
  visible?: boolean;
  /** 动画时间
   * @default 220
   */
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: ReactElement;
  /** 点击回调 */
  onClick?: (e: React.SyntheticEvent) => void;
};

/** 遮罩层 */
const Mask = React.forwardRef<HTMLDivElement, Props>((props: Props, ref) => {
  const { children, visible, style, duration = 220, hideOverflow = true, ...rest } = props;

  const wrapRef = useRef(null);
  const lastOverFlowRef = useRef('');

  useImperativeHandle(ref, () => wrapRef.current);

  const active = useCSSTransition(
    () => wrapRef.current,
    visible,
    { opacity: 0 },
    { opacity: 0.5 },
    duration
  );

  useEffect(() => {
    lastOverFlowRef.current = document.body.style.overflow;
    document.body.style.overflow = visible && hideOverflow ? 'hidden' : lastOverFlowRef.current;

    return () => {
      document.body.style.overflow = lastOverFlowRef.current;
    };
  }, [visible, hideOverflow]);

  return active ? (
    <div
      ref={wrapRef}
      {...rest}
      style={{
        ...style,
        opacity: 0,
        background: 'rgba(0, 0, 0)',
        zIndex: 1000,
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        touchAction: 'none',
        display: active ? '' : 'none',
        transition: `opacity ${duration}ms ease-in-out`,
      }}
    >
      {children}
    </div>
  ) : null;
});

Mask.displayName = 'W-Mask';

export default Mask;
