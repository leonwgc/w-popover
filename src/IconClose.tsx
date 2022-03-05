import React from 'react';

const SVGProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
};

const IconCross = (
  <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" {...SVGProps}>
    <path
      d="M240.512 180.181333l271.530667 271.488 271.530666-271.488a42.666667 42.666667 0 0 1 56.32-3.541333l4.010667 3.541333a42.666667 42.666667 0 0 1 0 60.330667l-271.530667 271.530667 271.530667 271.530666a42.666667 42.666667 0 0 1-56.32 63.872l-4.010667-3.541333-271.530666-271.530667-271.530667 271.530667-4.010667 3.541333a42.666667 42.666667 0 0 1-56.32-63.872l271.488-271.530666-271.488-271.530667a42.666667 42.666667 0 0 1 60.330667-60.330667z"
      p-id="2884"
    ></path>
  </svg>
);

type Props = {
  style?: React.CSSProperties;
  className?: string;
} & React.HTMLAttributes<HTMLSpanElement>;

const Close: React.FC<Props> = (props) => {
  return <span {...props}>{IconCross}</span>;
};

Close.displayName = 'Close';

export default Close;
