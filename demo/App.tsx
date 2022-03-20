import React, { useState, useRef } from 'react';
import { useMount, Button, AutoCenter, Avatar } from 'react-uni-comps';
import Popover, { Placement } from '../src';

export default function App() {
  const [v, setV] = useState(false);
  const [pos, setPos] = useState<any>({ left: '', top: '' });

  const ref = useRef(0);
  const elRef = useRef();

  useMount(() => {
    document.title = 'w-popover: 气泡框';
  });

  return (
    <div>
      {pos.x > 0 && (
        <div>
          {pos.x},{pos.y}
        </div>
      )}
      <Button
        type="primary"
        onClick={() => {
          const left = ~~(Math.random() * window.innerWidth);
          const top = ~~(Math.random() * window.innerHeight);

          Popover.show({
            left,
            top,
            content: 'hello,world',
            style: {
              width: 200,
              height: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
            closable: true,
            closeOnMaskClick: true,
          });
        }}
      >
        随机位置显示
      </Button>

      <AutoCenter>
        <Button
          style={{ position: 'fixed', zIndex: 10000 }}
          type="primary"
          onClick={() => {
            const p = [
              'top',
              'top-left',
              'top-right',
              'left',
              'left-top',
              'left-bottom',
              'bottom',
              'bottom-left',
              'bottom-right',
              'right',
              'right-top',
              'right-bottom',
            ][ref.current++] as Placement;

            Popover.show({
              anchor: elRef,
              content: p,
              style: { padding: 20 },
              placement: p,
              mask: true,
            });

            if (ref.current > 11) {
              ref.current = 0;
            }
          }}
        >
          anchor
        </Button>
      </AutoCenter>

      <div id="id" ref={elRef} style={{ position: 'absolute', top: 200, left: 200 }}>
        <Avatar size={80} onClick={() => console.log('hi')} />
      </div>

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
    </div>
  );
}
