import React, { useEffect, useRef, useState } from 'react';
import { AutoCenter, Avatar, Button, Space, styled, useForceUpdate } from 'react-uni-comps';
import Popover from '../src/Popover';
// import Popover from '../dist/index.esm';
import DemoBlock from './DemoBlock';
import PageWrap from './PageWrap';
import pkq from './images/pkq.png';
import Tooltip from './Tooltip';

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

  const [index, setIndex] = useState(0);

  const forceRender = useForceUpdate();

  return (
    <PageWrap>
      <DemoBlock title="普通" padding={40}>
        <AutoCenter>
          <Popover
            // transition={false}
            style={{ background: '#000', color: '#fff', padding: 0 }}
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
            <Tooltip title={`This's a tooltip `} placement={'top'}>
              <Button type="primary">Tooltip at top</Button>
            </Tooltip>

            <Tooltip title={`This's a tooltip `} placement={'bottom'}>
              <Button type="primary">Tooltip at bottom</Button>
            </Tooltip>

            <Tooltip title={`This's a tooltip `} placement={'right'}>
              <Button type="primary">Tooltip at right</Button>
            </Tooltip>
          </Space>
        </AutoCenter>
      </DemoBlock>

      <div style={{ height: '110vh' }}></div>
    </PageWrap>
  );
}
