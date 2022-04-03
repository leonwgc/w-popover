import React, { ReactElement, useState, useEffect } from 'react';
import clsx from 'clsx';
import { useSpring, animated } from '@react-spring/web';
import useUnmount from './hooks/useUnmount';
import './Mask.less';

type Props = {
  /** 显示遮罩时，设置body.style.overflow为hidden
   * @default true
   */
  hideOverflow?: boolean;
  /** 是否可见 */
  visible?: boolean;
  /** 动画时间
   * @default 280
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
  const {
    children,
    className,
    visible,
    duration = 280,
    style,
    hideOverflow = true,
    ...rest
  } = props;

  // animation effect
  const [active, setActive] = useState(visible);

  const styles = useSpring({
    opacity: visible ? 0.45 : 0,
    onStart: () => {
      setActive(true);
    },
    onRest: () => {
      // setActive(visible);
    },
    config: {
      duration,
    },
  });

  useEffect(() => {
    document.body.style.overflow = visible && hideOverflow ? 'hidden' : '';
  }, [visible, hideOverflow]);

  useUnmount(() => {
    document.body.style.overflow = '';
  });

  return active || visible ? (
    <animated.div
      ref={ref}
      {...rest}
      className={clsx('uc-mask', className)}
      style={{ ...styles, ...style }}
    >
      {children}
    </animated.div>
  ) : null;
});

Mask.displayName = 'UC-Mask';

export default Mask;
