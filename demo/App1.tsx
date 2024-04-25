import React, { useRef, useState } from 'react';
import { AutoCenter, Button, Space, styled, useForceUpdate } from 'react-uni-comps';
import { Popover, Tooltip } from '../src';
// import Popover from '../dist/index.esm';
import DemoBlock from './DemoBlock';
import PageWrap from './PageWrap';

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
  const forceRender = useForceUpdate();

  return (
    <PageWrap>
      <DemoBlock title="Popover" padding={40}>
        <AutoCenter>
          <Popover
            style={{ background: '#666', color: '#fff', padding: 0 }}
            placement={placements[ref.current] as any}
            visible={visible}
            onClose={() => setVisible(false)}
            content={<StyledContent>{placements[ref.current]}</StyledContent>}
          >
            <Button
              type="primary"
              style={{ height: 80, width: 160 }}
              onClick={() => {
                setVisible(true);

                ref.current++;
                if (ref.current > 11) {
                  ref.current = 0;
                }

                forceRender();
              }}
            >
              Try to click me
            </Button>
          </Popover>
        </AutoCenter>
      </DemoBlock>

      <DemoBlock title="Tooltip">
        <AutoCenter>
          <Space>
            <Tooltip content={`This's a tooltip `} placement={'top'}>
              <Button type="primary">Tooltip at top</Button>
            </Tooltip>

            <Tooltip content={`This's a tooltip `} placement={'bottom'}>
              <Button type="primary">Tooltip at bottom</Button>
            </Tooltip>

            <Tooltip content={`This's a tooltip `} placement={'right'}>
              <Button type="primary">Tooltip at right</Button>
            </Tooltip>
          </Space>
        </AutoCenter>
      </DemoBlock>

      <DemoBlock title="Scroll (the green block is scrollable)">
        <div
          style={{
            height: 200,
            width: '100%',
            border: '1px solid #ccc',
            textAlign: 'center',
            overflowY: 'scroll',
            position: 'relative',
          }}
        >
          <div style={{ height: '120vh', background: '#ccc' }}>
            <Popover placement="bottom" visible content="I'm here " style={{ padding: 6 }}>
              <Button outlined onClick={() => setVisible(true)}>
                hi, there~
              </Button>
            </Popover>

            <Popover placement="bottom" visible content="I'm here abs" style={{ padding: 6 }}>
              <Button
                outlined
                onClick={() => setVisible(true)}
                style={{ position: 'absolute', left: 50, top: 50 }}
              >
                hi, here~
              </Button>
            </Popover>

            <Popover
              placement="right"
              visible
              content="I'm here fixed"
              style={{ padding: 6, background: '#666', color: '#fff' }}
            >
              <Button outlined style={{ position: 'fixed', bottom: 100, left: 150 }}>
                hi, there~
              </Button>
            </Popover>
          </div>
        </div>
      </DemoBlock>

      <div style={{ height: '110vh' }}></div>
    </PageWrap>
  );
}
