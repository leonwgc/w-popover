import React, { useRef, useState, useReducer } from 'react';
import { Popover, Tooltip } from '../src';
// import Popover from '../dist/index.esm';
import DemoBlock from './DemoBlock';

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

  const [, forceRender] = useReducer((x) => x + 1, 0);

  const ref = useRef(0);

  return (
    <div>
      <DemoBlock title="Popover" padding={40}>
        <Popover
          style={{ background: '#666', color: '#fff', padding: '12px 24px' }}
          placement={placements[ref.current] as any}
          visible={visible}
          onClose={() => setVisible(false)}
          content={placements[ref.current]}
        >
          <button
            className="w-button"
            style={{ height: 60, width: 120 }}
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
          </button>
        </Popover>
      </DemoBlock>

      <DemoBlock title="Tooltip">
        <div style={{ display: 'flex', gap: 8 }}>
          <Tooltip content={`This's a tooltip `} placement={'top'}>
            <button className="w-button">Tooltip at top</button>
          </Tooltip>

          <Tooltip content={`This's a tooltip `} placement={'bottom'}>
            <button className="w-button">Tooltip at bottom</button>
          </Tooltip>

          <Tooltip content={`This's a tooltip `} placement={'right'}>
            <button className="w-button">Tooltip at right</button>
          </Tooltip>
        </div>
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
              <button className="w-button" onClick={() => setVisible(true)}>
                hi, there~
              </button>
            </Popover>

            <Popover placement="bottom" visible content="I'm here abs" style={{ padding: 6 }}>
              <button
                className="w-button"
                onClick={() => setVisible(true)}
                style={{ position: 'absolute', left: 50, top: 50 }}
              >
                hi, here~
              </button>
            </Popover>

            <Popover
              placement="right"
              visible
              content="I'm here fixed"
              style={{ padding: 6, background: '#666', color: '#fff' }}
            >
              <button className="w-button" style={{ position: 'fixed', bottom: 100, left: 150 }}>
                hi, there~
              </button>
            </Popover>
          </div>
        </div>
      </DemoBlock>

      <div style={{ height: '110vh' }}></div>
    </div>
  );
}
