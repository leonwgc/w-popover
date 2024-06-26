import React, { useRef, useState } from 'react';
import { Button } from 'react-uni-comps';
import Popover from '../src';

export default function App() {
  const ref = useRef();
  const [visible, setVisible] = useState(true);

  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
      <div
        ref={ref}
        style={{
          height: 200,
          width: 600,
          margin: '0 auto',
          border: '1px solid #666',
          textAlign: 'center',
          overflowY: 'scroll',
          position: 'relative',
        }}
      >
        <div style={{ height: '120vh', width: '120%', background: '#00bc8d' }}>
          <Popover
            placement="bottom"
            visible={visible}
            content="I'm here "
            style={{ padding: 6 }}
            mountContainer={() => ref.current}
          >
            <Button outlined onClick={() => setVisible(true)}>
              hi, there~
            </Button>
          </Popover>

          <Popover placement="bottom" visible content="I'm here abs" style={{ padding: 6 }}>
            <Button outlined style={{ position: 'absolute', left: 50, top: 50 }}>
              hi, herer~
            </Button>
          </Popover>

          <Popover
            placement="right"
            visible
            content="I'm here fixed"
            style={{ padding: 6, background: '#666', color: '#fff' }}
          >
            <Button outlined style={{ position: 'fixed', left: 50, top: 150 }}>
              hi, herer~
            </Button>
          </Popover>
        </div>
      </div>

      <Popover
        placement="right"
        visible
        content="I'm here abs "
        style={{ padding: 6, background: '#666', color: '#fff' }}
      >
        <Button type="primary" style={{ position: 'absolute', left: 150, top: 50 }}>
          hi, herer~
        </Button>
      </Popover>
    </div>
  );
}
