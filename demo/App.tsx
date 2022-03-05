import React, { useState } from 'react';
import { useMount, Button } from 'react-uni-comps';
import Popover from '../src';

export default function App() {
  const [v, setV] = useState(false);
  useMount(() => {
    document.title = 'w-popover: 气泡框';
  });

  return (
    <Popover
      placement="right-bottom"
      visible={v}
      onClose={() => setV(false)}
      content={<div style={{ padding: 16 }}>I'm here </div>}
      onVisibleChange={(v) => {
        console.log(v);
      }}
    >
      <Button
        style={{ margin: '100px 0px 10px 150px' }}
        onMouseOut={() => setV(false)}
        onMouseOver={() => setV(true)}
      >
        hi, there~
      </Button>
    </Popover>
  );
}
