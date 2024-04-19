import clsx from 'clsx';
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import IconClose from './IconClose';
import Mask from './Mask';
import { getMountContainer, getTransformPosition } from './helper';
import useCSSTransition from './hooks/useCSSTransition';
import useEventListener from './hooks/useEventListener';
import useLatest from './hooks/useLatest';
import useUpdateEffect from './hooks/useUpdateEffect';
import { hide, show } from './show';
import { PopoverProps, attachPropertiesToComponent } from './types';
import { getArrowStyle, getModalStyle, getScrollContainer } from './utils';
import { MARGIN, Offset } from './utils/getModalStyle';

/**
 * React Popover
 * @param {PopoverProps} props
 * @return {*}
 */
const Popover = (props: PopoverProps): React.ReactElement => {
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
  const mountedRef = useRef(false);

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

        // trigger the browser to synchronously calculate the style and layout, to trigger reflow aka layout thrashing
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
      calculateStyle(anchorEl, scrollContainer, !mountedRef.current);
      mountedRef.current = true;
    } else {
      mountedRef.current = false;
    }
  }, [visible, calculateStyle]);

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
                position: 'absolute',
                background: '#fff',
                zIndex: 1000,
                transformOrigin: trasformOrigin,
                transitionDuration: `${transitionDuration}ms`,
                transitionProperty: 'none',
                willChange: 'transform, opacity',
                ...style,
              }}
            >
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
