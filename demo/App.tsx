import React, { useState } from 'react';
import { useMount, Button } from 'react-uni-comps';
import Popover from '../src';

export default function App() {
  const [v, setV] = useState(true);
  useMount(() => {
    document.title = 'w-popover: 气泡框';
  });

  return (
    <Popover
      placement="right-bottom"
      visible={v}
      onClose={() => setV(false)}
      content={<div style={{ width: 400, height: 200 }}>I'm here </div>}
      onVisibleChange={(v) => {
        console.log(v);
      }}
      closable
      mask
    >
      <Button
        outlined
        style={{ position: 'fixed', top: 400, left: 200 }}
        onClick={() => setV(true)}
      >
        hi, there~
      </Button>
    </Popover>
  );
}
