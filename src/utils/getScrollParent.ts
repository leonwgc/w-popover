const overflowScrollReg = /scroll|auto|overlay/i;
const ELEMENT_NODE_TYPE = 1;

/**
 * Check whether a node is Element.
 * @param node
 * @returns
 */
function isElement(node: Element) {
  return node.tagName !== 'HTML' && node.tagName !== 'BODY' && node.nodeType === ELEMENT_NODE_TYPE;
}

/**
 * Get the nearest scroll parent.
 * @param el
 * @param root
 * @returns
 */
export function getScrollParent(el: Element, root: Element | Window = window): Element | Window {
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
