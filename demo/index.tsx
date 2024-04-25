import React from 'react';
import { render, hydrate } from 'react-dom';
import App from './App';
import './App.less';

const root = document.querySelector('#root') as HTMLElement;
const doRender = root.hasChildNodes() ? hydrate : render;

doRender(<App />, root);
