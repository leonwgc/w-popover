declare type ScrollElement = Element | Window;
/**
 *
 * 获取最近的滚动父元素，如果没有，则返回root, root默认是window
 *
 * @export
 * @param {Element} el
 * @param {(ScrollElement | null | undefined)} [root=window]
 * @return {*}
 */
export declare function getScrollParent(el: Element, root?: ScrollElement | null | undefined): Element | Window;
export {};
