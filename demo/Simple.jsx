import React, { useState } from 'react';
import Popover from '../src/Popover';
import DemoBlock from './DemoBlock';
import PageWrap from './PageWrap';

export default function App() {
  const [visible, setVisible] = useState(true);

  return (
    <PageWrap>
      <DemoBlock title="Simple usage">
        <div>
          <Popover
            placement="bottom-right"
            visible={visible}
            content="I'm here"
            style={{ padding: 6, width: 150, height: 44, background: '#999', color: '#fff' }} // popover container style
          >
            <div
              role="button"
              style={{
                padding: '6px 12px',
                display: 'inline-flex',
                alignItems: 'center',
                height: 30,
                border: '1px dashed',
              }}
              onClick={() => setVisible(true)}
            >
              This is anchor button to trigger Popover to showup
            </div>
          </Popover>
        </div>
      </DemoBlock>
    </PageWrap>
  );
}
