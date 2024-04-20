
const overflowScrollReg = /scroll|auto|overlay/i;
const ELEMENT_NODE_TYPE = 1;

type ScrollElement = Element | Window;

function isElement(node: Element) {
  return node.tagName !== 'HTML' && node.tagName !== 'BODY' && node.nodeType === ELEMENT_NODE_TYPE;
}


/**
 *
 * 获取最近的滚动父元素，如果没有，则返回root, root默认是window
 *
 * @export
 * @param {Element} el
 * @param {(ScrollElement | null | undefined)} [root=window]
 * @return {*}
 */
export function getScrollParent(el: Element, root: ScrollElement | null | undefined = window): Element | Window {
  let node = el;

  while (node && node !== root && isElement(node)) {
    const { overflowY } = window.getComputedStyle(node);
    if (overflowScrollReg.test(overflowY)) {
      return node;
    }
    node = node.parentNode as Element;
  }

  return root;
}