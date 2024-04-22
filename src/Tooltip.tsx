import React, { useRef, useState } from 'react';
import Popover from './Popover';
import type { TooltipProps } from './types';

/**
 * Tooltip based on Popover.
 */
const Tooltip = (props: TooltipProps): React.ReactElement => {
  const {
    hoverDelay = 100,
    placement = 'top',
    arrow = true,
    offset,
    className,
    style,
    children,
    ...rest
  } = props;

  const ref = useRef<number>(0);
  const [visible, setVisible] = useState(false);

  const actionProps = {
    onMouseEnter: () => {
      if (ref.current) {
        clearTimeout(ref.current);
      }
      setVisible(true);
    },
    onMouseLeave: () => {
      ref.current = window.setTimeout(() => {
        setVisible(false);
      }, hoverDelay);
    },
    onFocus: () => {
      if (ref.current) {
        clearTimeout(ref.current);
      }
      setVisible(true);
    },
  };

  return (
    <Popover
      {...rest}
      className={`w-tooltip ${className}`}
      style={{ background: '#333', color: '#fff', padding: '6px 12px', ...style }}
      visible={visible}
      arrow={arrow}
      placement={placement}
      offset={offset}
      {...actionProps}
    >
      {React.isValidElement(children) ? (
        React.cloneElement(children, {
          ...actionProps,
        })
      ) : (
        <span {...actionProps}>{children}</span>
      )}
    </Popover>
  );
};
Tooltip.displayName = 'W-Tooltip';

export default Tooltip;
