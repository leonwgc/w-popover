import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './App.less';

render(<App />, document.querySelector('#root') as HTMLElement);
