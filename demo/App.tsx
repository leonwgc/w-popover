import React, { useState, useRef, useEffect } from 'react';
import { useMount, Button, AutoCenter, Avatar, Space, styled } from 'react-uni-comps';
import Popover, { Placement } from '../src';
import Mask from '../src/Mask';
import useCSSTransition from '../src/hooks/useCSSTransition';

const Block = styled.div`
  transition: all 250ms ease-in-out;
  background-color: red;

  &.from {
    width: 200px;
    height: 10px;
    opacity: 0;
    transform: translate3d(0, -4px, 0);
    color: #ccc;
  }

  &.to {
    width: 200px;
    height: 200px;
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export default function App() {
  const [v, setV] = useState(false);

  const [v1, setV1] = useState(false);
  const [v2, setV2] = useState(false);
  const ref1 = useRef();
  const ref2 = useRef();

  const active = useCSSTransition(ref1, v1, 'from', 'to', 250);

  const active2 = useCSSTransition(
    ref2,
    v2,
    { width: '400px', height: '0px', opacity: 0, transform: 'translate3d(0, -20px, 0)' },
    { width: '400px', height: '200px', opacity: 1, transform: 'translate3d(0, 0, 0)' },
    250
  );

  useEffect(() => {
    setTimeout(() => {
      setV2(true);
    }, 1000);
  }, []);

  const [pos, setPos] = useState<any>({ left: '', top: '' });

  const ref = useRef(0);
  const elRef = useRef();

  const [visible, setVisible] = useState(false);

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

      <Space>
        <Button
          type="primary"
          onClick={() => {
            const left = ~~(Math.random() * window.innerWidth);
            const top = ~~(Math.random() * window.innerHeight);

            Popover.show({
              left,
              top,
              content: 'hello,world',
              closable: true,
              closeOnMaskClick: true,
            });
          }}
        >
          随机位置显示
        </Button>

        <Button
          onClick={() => {
            Popover.hide();
          }}
        >
          close
        </Button>
      </Space>

      <AutoCenter>
        <Button
          style={{ position: 'fixed', zIndex: 100 }}
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

      <Button type="primary" onClick={() => setVisible(true)}>
        mask test
      </Button>

      <Mask visible={visible} onClick={() => setVisible(false)} />

      <Button type="primary" onClick={() => setV1((v) => !v)}>
        show red block
      </Button>

      <p>{active && <Block ref={ref1} onClick={() => setV1(false)} />}</p>

      <p>{active2 && <Block ref={ref2} onClick={() => setV2(false)} />}</p>
    </div>
  );
}
