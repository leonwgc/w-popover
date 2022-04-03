import React, { ReactElement } from 'react';
import './Mask.less';
declare type Props = {
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
declare const Mask: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default Mask;
