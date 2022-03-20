import { ReactElement } from 'react';
import ReactDOM from 'react-dom';

/** 是否是浏览器 */
export const isBrowser = !!(typeof window !== 'undefined' && window);

export type Dispose = (beforeDispose?: () => Promise<void>) => void;

/**
 *  container内部元素卸载前执行过渡动画, 配合renderElement使用
 *
 * @param {HTMLElement} container
 * @param {string} selector
 * @param {number} timeout
 * @return {*}  {Promise<void>}
 */
export const beforeDisposeGen =
  (container: HTMLElement, selector: string, timeout: number): (() => Promise<void>) =>
  () => {
    return new Promise((dispose) => {
      const el = container.querySelector(selector);
      if (el) {
        el.classList.remove('to');
        el.classList.add('from');
      }

      setTimeout(dispose, timeout);
    });
  };

/**
 * 自定义渲染元素到容器
 *
 * @param {ReactElement} element
 * @param {HTMLElement} [container]
 * @return {Dispose}  dispose
 */
export const renderElement: (element: ReactElement, container?: HTMLElement) => Dispose = (
  element,
  container
) => {
  const dom = container || document.createElement('div');
  document.body.appendChild(dom);

  ReactDOM.render(element, dom);

  const dispose = () => {
    ReactDOM.unmountComponentAtNode(dom);
    if (dom && dom.parentNode) {
      dom.parentNode.removeChild(dom);
    }
  };

  return (beforeDispose) => {
    if (typeof beforeDispose === 'function') {
      // play transition here before unmount
      beforeDispose().then(dispose);
    } else {
      dispose();
    }
  };
};
