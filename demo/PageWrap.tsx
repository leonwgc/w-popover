import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'react-uni-comps';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(245, 247, 250);
    font-size: 14px;
    margin:0;
    font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', STHeiti,
    'Microsoft Yahei', Tahoma, Simsun, sans-serif;
    line-height: 1.5715;
  }
  *{
    box-sizing: border-box;;
  }
`;

const getColor = () => document.documentElement.style.getPropertyValue('--uc-color') || '#005cff';

const initialState = { theme: getColor() };

export default function PageWrap({ children, ...rest }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider color={getColor()}>{children}</ThemeProvider>
    </>
  );
}
