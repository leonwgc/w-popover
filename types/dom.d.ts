import { ReactElement } from 'react';
/** 是否是浏览器 */
export declare const isBrowser: boolean;
export declare type Dispose = (beforeDispose?: () => Promise<void>) => void;
/**
 *  container内部元素卸载前执行过渡动画, 配合renderElement使用
 *
 * @param {HTMLElement} container
 * @param {string} selector
 * @param {number} timeout
 * @return {*}  {Promise<void>}
 */
export declare const beforeDisposeGen: (container: HTMLElement, selector: string, timeout: number) => (() => Promise<void>);
/**
 * 自定义渲染元素到容器
 *
 * @param {ReactElement} element
 * @param {HTMLElement} [container]
 * @return {Dispose}  dispose
 */
export declare const renderElement: (element: ReactElement, container?: HTMLElement) => Dispose;
