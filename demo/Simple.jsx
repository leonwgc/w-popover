import React, { useState } from 'react';
import { Popover, Tooltip } from '../src';

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <p>
        <Popover
          placement="bottom-right"
          visible={visible}
          onClose={() => setVisible(false)}
          closeOnClickOutside
          content="This is ReactNode content."
        >
          <button onClick={() => setVisible(true)}>Anchor to trigger Popover to showup</button>
        </Popover>
      </p>

      <p>
        <Tooltip content="This is a tooltip." placement="right">
          <button>mouse over me</button>
        </Tooltip>
      </p>
    </div>
  );
}
