import React from 'react';

type Props = {
  title?: string;
  padding?: string | number;
  background?: string;
  border?: string;
  height?: string | number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

export default function Block({
  title = '',
  padding = '12px',
  background = '#fff',
  border,
  height,
  children,
  ...rest
}: Props) {
  return (
    <div className="demo-block" {...rest}>
      <div className="demo-block__title">{title}</div>
      <div
        className="demo-block__content"
        style={{
          padding,
          background,
          border,
          height,
        }}
      >
        {children}
      </div>
    </div>
  );
}
