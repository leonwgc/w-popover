import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { attachPropertiesToComponent, Placement } from './types';
import { getArrowStyle, getModalStyle, getScrollContainer } from './utils';
import clsx from 'clsx';
import Mask from './Mask';
import { MARGIN, Offset } from './utils/getModalStyle';
import useCallbackRef from './hooks/useCallbackRef';
import useUpdateEffect from './hooks/useUpdateEffect';
import { useSpring, animated } from '@react-spring/web';
import IconClose from './IconClose';
import './Popover.less';
import { show, hide } from './show';
import useUpdateLayoutEffect from './hooks/useUpdateLayoutEffect';

export type Props = {
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
  mountContainer?: () => HTMLElement | HTMLElement;
  /** 点击外部区域是否关闭,默认true*/
  closeOnClickOutside?: boolean;
  /** 点击遮罩是否关闭,默认true*/
  closeOnMaskClick?: boolean;
  /** 展开动画, 默认true */
  animate?: boolean;
} & React.HTMLAttributes<HTMLElement>;

/**
 * 点击/鼠标移入元素，弹出气泡式的卡片浮层
 *
 * @param {Props} props
 * @return {*}  {React.ReactElement}
 */
const Popover = (props: Props): React.ReactElement => {
  const {
    placement = 'bottom',
    content,
    arrow = true,
    visible,
    closable,
    onVisibleChange,
    onClose,
    className,
    style,
    children,
    mask,
    maskStyle,
    maskClass,
    mountContainer = document.body,
    closeOnClickOutside = true,
    closeOnMaskClick = true,
    animate = true,
    offset = {},
    ...rest
  } = props;

  const anchorRef = useRef<HTMLElement>();
  const popoverRef = useRef<HTMLDivElement>(null);
  const resizeTimerRef = useRef<number>(0);
  const offsetRef = useRef<Offset>(offset);
  const onCloseRef = useCallbackRef(onClose);

  const [modalStyle, setModalStyle] = useState({});
  const [arrowStyle, setArrowStyle] = useState({});

  // animation effect
  const [active, setActive] = useState(visible);

  let mountNode;
  if (mountContainer instanceof HTMLElement) {
    mountNode = mountContainer;
  } else {
    mountNode = mountContainer?.();
  }

  const [styles, api] = useSpring(() => ({
    from: { v: 1 },
    config: {
      duration: 220,
    },
    immediate: !animate,
    onStart: () => {
      setActive(true);
    },
    onRest: () => {
      setActive(visible);
    },
  }));

  useUpdateLayoutEffect(() => {
    api.start({
      from: {
        v: visible ? 0 : 1,
      },
      to: {
        v: visible ? 1 : 0,
      },
    });
  }, [visible, api]);

  useEffect(() => {
    offsetRef.current = offset;
  }, [offset]);

  useUpdateEffect(() => {
    onVisibleChange?.(visible);
  }, [visible]);

  useEffect(() => {
    const anchorEl = anchorRef.current;
    const scrollContainer = getScrollContainer(anchorEl);
    // todo: support cust scroll container , by now it's window

    const calculateStyle = (anchorEl, scrollContainer) => {
      const modalEl = popoverRef.current;

      const modalStyle = getModalStyle(
        modalEl,
        anchorEl,
        document.body,
        scrollContainer,
        placement,
        offsetRef.current
      );
      const arrowStyle = getArrowStyle(modalEl, placement, mask, MARGIN);

      setModalStyle(modalStyle);
      setArrowStyle(arrowStyle);
    };

    const handleResize = () => {
      if (resizeTimerRef.current) {
        window.cancelAnimationFrame(resizeTimerRef.current);
      }
      resizeTimerRef.current = window.requestAnimationFrame(() => {
        calculateStyle(anchorEl, scrollContainer);
      });
    };

    if (visible) {
      calculateStyle(anchorEl, scrollContainer);

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [visible, placement, mask]);

  const closeOutsideHandler = useCallback(
    (e) => {
      const el = popoverRef.current;
      const anchor = anchorRef.current;

      if (el && !el.contains(e.target) && !anchor.contains(e.target)) {
        onCloseRef.current?.();
      }
    },
    [onCloseRef]
  );

  useEffect(() => {
    if (closeOnClickOutside) {
      window.addEventListener('click', closeOutsideHandler, false);

      return () => {
        window.removeEventListener('click', closeOutsideHandler, false);
      };
    }
  }, [closeOnClickOutside, closeOutsideHandler]);

  return (
    <>
      {React.cloneElement(children, { ref: anchorRef })}
      {ReactDOM.createPortal(
        visible && (
          <div>
            <Mask
              visible={mask && visible}
              className={maskClass}
              style={maskStyle}
              onClick={() => {
                closeOnMaskClick && onClose?.();
              }}
            />

            <animated.div
              {...rest}
              ref={popoverRef}
              className={clsx(className, 'uc-popover', { mask: mask })}
              style={{
                ...modalStyle,
                ...style,
                opacity: styles.v.to((v) => v),
                boxShadow: styles.v.to(
                  (v) => v === 1 && `box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)`
                ),
              }}
            >
              {(active || visible) && (
                <>
                  {/* arrow */}
                  {arrow && <span className={clsx('uc-popover-arrow')} style={arrowStyle} />}

                  {/* close */}
                  {closable && <IconClose className={clsx('uc-popover-close')} onClick={onClose} />}

                  {/** content */}
                  <animated.div
                    style={{
                      ...styles,
                      transform: styles.v
                        .to({ range: [0, 1], output: [0.96, 1] })
                        .to((v) => `scale(${v})`),
                    }}
                    className={clsx('uc-popover-content')}
                  >
                    {content}
                  </animated.div>
                </>
              )}
            </animated.div>
          </div>
        ),
        mountNode
      )}
    </>
  );
};

export default attachPropertiesToComponent(Popover, { show, hide });
