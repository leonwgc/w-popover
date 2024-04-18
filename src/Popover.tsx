import clsx from 'clsx';
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import IconClose from './IconClose';
import Mask from './Mask';
import useCSSTransition from './hooks/useCSSTransition';
import useEventListener from './hooks/useEventListener';
import useLatest from './hooks/useLatest';
import useUpdateEffect from './hooks/useUpdateEffect';
import { hide, show } from './show';
import { Placement, attachPropertiesToComponent } from './types';
import { getArrowStyle, getModalStyle, getScrollContainer } from './utils';
import { MARGIN, Offset } from './utils/getModalStyle';

type MountContainerType = HTMLElement | (() => HTMLElement) | React.MutableRefObject<HTMLElement>;
const isObject = (obj) => Object.prototype.toString.call(obj) === '[object Object]';
/**
 *
 *
 * @param {MountContainerType} container
 * @return {*}  {HTMLElement}
 */
export const getMountContainer = (container: MountContainerType): HTMLElement => {
  let mountNode;

  if (container instanceof HTMLElement) {
    mountNode = container;
  } else if (isObject(container) && 'current' in container) {
    mountNode = container.current;
  } else if (typeof container === 'function') {
    mountNode = container?.();
  }

  return mountNode;
};

const aniMap = {
  top: 'bottom',
  bottom: 'top',
  left: 'right',
  right: 'left',
};

const getTransformPosition = (placement) => {
  const pos = placement.split('-');

  let ret = '';

  if (pos[0]) {
    ret += aniMap[pos[0]];
  }

  if (pos[1]) {
    ret += ' ' + pos[1];
  }

  return ret;
};

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

/**
 * React Popover
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
    transition = true,
    transitionDuration = 200,
    offset = {},
    ...rest
  } = props;

  const anchorRef = useRef<HTMLElement>();
  const popoverRef = useRef<HTMLDivElement>(null);
  const resizeTimerRef = useRef<number>(0);
  const offsetRef = useRef<Offset>(offset);
  const onCloseRef = useLatest(onClose);
  const [arrowStyle, setArrowStyle] = useState({});
  const mountNode = getMountContainer(mountContainer);

  useEffect(() => {
    offsetRef.current = offset;
  }, [offset]);

  useUpdateEffect(() => {
    onVisibleChange?.(visible);
  }, [visible]);

  const calculateStyle = React.useCallback(
    (anchorEl, scrollContainer, isFirstMount = false) => {
      const el = popoverRef.current;

      const modalStyle = getModalStyle(
        el,
        anchorEl,
        document.body,
        scrollContainer,
        placement,
        offsetRef.current
      );
      const arrowStyle = getArrowStyle(el, placement, MARGIN);

      el.style.transitionProperty = 'none';
      el.style.top = modalStyle.top + 'px';
      el.style.left = modalStyle.left + 'px';
      el.style.position = modalStyle.position;

      if (transition && isFirstMount) {
        el.style.visibility = 'hidden';
        el.style.opacity = '0';
        el.style.transform = 'scale(0)';

        // trigger the browser to synchronously calculate the style and layout*. This is also called reflow or layout thrashing
        el.offsetHeight;
        el.style.transitionProperty = 'transform, opacity';
        el.style.visibility = 'visible';
      }
      setArrowStyle(arrowStyle);
    },
    [transition, placement]
  );

  const handleResize = () => {
    const anchorEl = anchorRef.current;
    const scrollContainer = getScrollContainer(anchorEl);

    calculateStyle(anchorEl, scrollContainer);

    if (resizeTimerRef.current) {
      window.cancelAnimationFrame(resizeTimerRef.current);
    }
    resizeTimerRef.current = window.requestAnimationFrame(() => {
      calculateStyle(anchorEl, scrollContainer);
    });
  };

  useEventListener(() => window, 'resize', visible ? handleResize : null);

  useEventListener(() => window, 'scroll', visible ? handleResize : null);

  useLayoutEffect(() => {
    const anchorEl = anchorRef.current;
    const scrollContainer = getScrollContainer(anchorEl);

    if (visible) {
      calculateStyle(anchorEl, scrollContainer, true);
    }
  }, [visible, calculateStyle]);

  useEventListener(() => window, 'resize');

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

  useEventListener(() => document, 'click', closeOnClickOutside ? closeOutsideHandler : null);

  const trasformOrigin = useMemo(() => {
    return getTransformPosition(placement);
  }, [placement]);

  const active = useCSSTransition(
    () => popoverRef.current,
    visible,
    { opacity: 0, transform: `scale(0)` },
    { opacity: 1, transform: `scale(1)` },
    transitionDuration
  );

  return (
    <>
      <Mask
        visible={mask && visible}
        className={maskClass}
        style={maskStyle}
        onClick={() => {
          closeOnMaskClick && onClose?.();
        }}
      />
      {React.cloneElement(children, { ref: anchorRef })}

      {ReactDOM.createPortal(
        <>
          {active && (
            <div
              {...rest}
              ref={popoverRef}
              className={clsx(className, 'w-popover')}
              style={{
                ...style,
                position: 'absolute',
                background: '#fff',
                zIndex: 1000,
                transformOrigin: trasformOrigin,
                transitionDuration: `${transitionDuration}ms`,
                transitionProperty: 'none',
                willChange: 'transform, opacity',
              }}
            >
              {/* arrow */}
              {arrow && (
                <div
                  className={clsx('w-popover__arrow')}
                  style={{
                    position: 'absolute',
                    width: 6,
                    height: 6,
                    zIndex: -1,
                    background: 'inherit',
                    transform: 'rotate(45deg)',
                    ...arrowStyle,
                  }}
                />
              )}

              {/* close */}
              {closable && (
                <IconClose
                  className={clsx('w-popover__close')}
                  onClick={onClose}
                  style={{
                    position: 'absolute',
                    zIndex: 10,
                    top: 6,
                    right: 6,
                    cursor: 'pointer',
                    color: 'rgb(0,0,0)',
                    opacity: 0.35,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
              )}
              {content}
            </div>
          )}
        </>,
        mountNode
      )}
    </>
  );
};

export default attachPropertiesToComponent(Popover, { show, hide });
