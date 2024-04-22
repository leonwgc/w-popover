import clsx from 'clsx';
import React, { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import IconClose from './IconClose';
import Mask from './Mask';
import { attachPropertiesToComponent, getMountContainer, getTransformPosition } from './helper';
import { applyStyleOrClsToElement } from './hooks/dom';
import useCSSTransition from './hooks/useCSSTransition';
import useEventListener from './hooks/useEventListener';
import useLatest from './hooks/useLatest';
import useUpdateEffect from './hooks/useUpdateEffect';
import { hide, show } from './show';
import type { PopoverProps } from './types';
import { getArrowStyle, getModalStyle } from './utils';
import { MARGIN } from './utils/getModalStyle';
import { getScrollParent } from './utils/getScrollParent';

const transformFrom = { opacity: 0, transform: `scale(0)` };
const transformTo = { opacity: 1, transform: `scale(1)` };
const transitionProperty = 'transform, opacity';

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
  const offsetRef = useLatest(offset);
  const onCloseRef = useLatest(onClose);
  const [arrowStyle, setArrowStyle] = useState({});
  const mountContainerRef = useLatest(mountContainer);
  const [mountNode, setMountNode] = useState(() => {
    return getMountContainer(mountContainer);
  });
  const mountNodeLRef = useLatest(mountNode);
  const flagRef = useRef(false);

  const calculateStyle = React.useCallback(
    (anchorEl, scrollContainer) => {
      const el = popoverRef.current;

      applyStyleOrClsToElement(el, { transitionProperty: 'none', transform: 'none' });

      const modalStyle = getModalStyle(
        el,
        anchorEl,
        mountNodeLRef.current,
        scrollContainer,
        placement,
        offsetRef.current
      );
      const arrowStyle = getArrowStyle(el, placement, MARGIN);

      applyStyleOrClsToElement(el, {
        top: modalStyle.top + 'px',
        left: modalStyle.left + 'px',
        position: modalStyle.position,
      });

      if (transition && !flagRef.current) {
        flagRef.current = true;
        applyStyleOrClsToElement(el, transformFrom);

        // trigger the browser to synchronously calculate the style and layout
        // aka trigger reflow / layout thrashing
        // in case of treeshaking
        el['__oh__'] = el.offsetHeight;
        applyStyleOrClsToElement(el, { transitionProperty });
      }
      setArrowStyle(arrowStyle);
    },
    [transition, placement, offsetRef, mountNodeLRef]
  );

  const handleResize = () => {
    const anchorEl = anchorRef.current;
    const scrollContainer = getScrollParent(anchorEl);

    calculateStyle(anchorEl, scrollContainer);

    if (resizeTimerRef.current) {
      window.cancelAnimationFrame(resizeTimerRef.current);
    }
    resizeTimerRef.current = window.requestAnimationFrame(() => {
      calculateStyle(anchorEl, scrollContainer);
    });
  };

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

  useEventListener(() => window, 'resize', visible ? handleResize : void 0);

  useEventListener(
    () => {
      const anchorEl = anchorRef.current;
      const scrollContainer = getScrollParent(anchorEl);
      return scrollContainer;
    },
    'scroll',
    visible ? handleResize : void 0
  );

  useEventListener(() => document, 'click', closeOnClickOutside ? closeOutsideHandler : void 0);

  const tryRender = useCallback(() => {
    requestAnimationFrame(() => {
      const node = getMountContainer(mountContainerRef.current);
      if (node) {
        setMountNode(node);
      } else {
        tryRender();
      }
    });
  }, [mountContainerRef]);

  useLayoutEffect(() => {
    const anchorEl = anchorRef.current;
    const scrollContainer = getScrollParent(anchorEl);

    if (mountNode && visible) {
      calculateStyle(anchorEl, scrollContainer);
    } else {
      if (!mountNode) {
        tryRender();
      }
    }
  }, [calculateStyle, mountNode, tryRender, visible]);

  const transformOrigin = useMemo(() => {
    return getTransformPosition(placement);
  }, [placement]);

  const active = useCSSTransition(
    () => (transition ? popoverRef.current : null),
    visible && !!mountNode,
    transformFrom,
    transformTo,
    transitionDuration
  );

  useUpdateEffect(() => {
    onVisibleChange?.(visible);
    if (!visible) {
      flagRef.current = false;
    }
  }, [visible]);

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

      {mountNode &&
        ReactDOM.createPortal(
          <>
            {((transition && active) || (!transition && visible)) && (
              <div
                {...rest}
                ref={popoverRef}
                className={clsx(className, 'w-popover')}
                style={{
                  position: 'absolute',
                  background: '#fff',
                  zIndex: 1000,
                  transformOrigin,
                  transitionDuration: `${transitionDuration}ms`,
                  willChange: transition ? transitionProperty : 'unset',
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
