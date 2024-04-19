import React, { useEffect, useRef, useState } from 'react';
import { AutoCenter, Avatar, Button, Space, styled, useForceUpdate } from 'react-uni-comps';
import Popover from '../src/Popover';
import DemoBlock from './DemoBlock';
import PageWrap from './PageWrap';
import pkq from './images/pkq.png';

const StyledContent = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const placements = [
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
];

export default function App() {
  const [visible, setVisible] = useState(true);

  const ref = useRef(0);
  const ref1 = useRef(0);
  const elRef = useRef();
  const btnRef = useRef();

  const forceRender = useForceUpdate();

  useEffect(() => {
    const p = placements[ref.current] as any;
    Popover.show({
      anchor: elRef,
      style: { background: '#666', color: '#fff' },
      content: <StyledContent>{p}</StyledContent>,
      placement: p,
    });
  }, []);

  const handlePkg = () => {
    const p = placements[ref1.current++] as any;

    Popover.show({
      anchor: elRef,
      style: { background: '#666', color: '#fff' },
      content: <StyledContent>{p}</StyledContent>,
      placement: p,
    });

    if (ref1.current > 11) {
      ref1.current = 0;
    }
  };

  return (
    <PageWrap>
      <DemoBlock title="普通" padding={40}>
        <AutoCenter>
          <Popover
            style={{ background: '#000', color: '#fff', padding: 0 }}
            placement={placements[ref.current] as any}
            visible={visible}
            onClose={() => setVisible(false)}
            content={<StyledContent>{placements[ref.current]}</StyledContent>}
          >
            <Button
              type="primary"
              onClick={() => {
                setVisible(true);
                ref.current++;
                if (ref.current > 11) {
                  ref.current = 0;
                }
                forceRender();
              }}
            >
              点我试试
            </Button>
          </Popover>
        </AutoCenter>
      </DemoBlock>

      <DemoBlock title="静态调用">
        <Space>
          <Button type="primary" onClick={handlePkg}>
            静态调用
          </Button>

          <Button
            ref={btnRef}
            onClick={() => {
              Popover.hide();
            }}
          >
            关闭
          </Button>
        </Space>

        <AutoCenter style={{ marginTop: 100 }}>
          <img src={pkq} ref={elRef} onClick={handlePkg} style={{ cursor: 'pointer' }} />
        </AutoCenter>
        {/* <div style={{ height: '100vh' }}></div> */}
      </DemoBlock>
    </PageWrap>
  );
}
