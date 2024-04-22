import React, { useState } from 'react';
import Popover from '../src/Popover';

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Popover
        placement="bottom-right"
        visible={visible}
        onClose={() => setVisible(false)}
        closeOnClickOutside
        content="This is ReactNode content."
      >
        <button onClick={() => setVisible(true)}>Anchor to trigger Popover to showup</button>
      </Popover>
    </div>
  );
}
