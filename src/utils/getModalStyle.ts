import { getComputedStyle, getNodeName } from './utils';
import { getOffsetTop } from './getOffsetParent';

export const MARGIN = 12;

interface IModalStyle {
  position: 'absolute' | 'fixed';
  top: number;
  left: number;
}

export type Offset = { x?: number; y?: number };

/**
 * Calculate the modal's position based on its anchor element, user-defined placement and offset
 * @param {HTMLElement} modalEl
 * @param {Element} anchorEl
 * @param {Element} parentEl
 * @param {string} placement
 * @param {object} customOffset
 */
export const getModalStyle = (
  modalEl: Element,
  anchorEl: Element,
  parentEl: Element,
  scrollContainer: Element,
  placement = 'bottom',
  customOffset: Offset
): IModalStyle => {
  const modalPos = modalEl.getBoundingClientRect();
  const anchorPos = anchorEl.getBoundingClientRect();
  const parentPos = parentEl.getBoundingClientRect();

  const isParentBody = getNodeName(parentEl) === 'body';
  const anchorPosition = getComputedStyle(anchorEl).position;
  const isAnchorFixedOrAbsolute = anchorPosition === 'fixed' || anchorPosition === 'absolute';

  // backup
  // const scrollY = isAnchorFixed
  //   ? anchorPos.top
  //   : isParentBody
  //   ? anchorPos.top + scrollTop
  //   : anchorOffsetTop;

  const anchorTop = isAnchorFixedOrAbsolute
    ? anchorPos.top
    : isParentBody
    ? anchorPos.top - scrollContainer.scrollTop
    : getOffsetTop(anchorEl);

  const top = anchorTop;
  const bottom = anchorPos.height + anchorTop;
  const left = anchorPos.left - (isAnchorFixedOrAbsolute ? 0 : parentPos.left);

  const { width, height } = anchorPos;

  const transform: Record<string, Record<string, number>> = {
    'top': {
      top: top - modalPos.height - MARGIN,
      left: left + width / 2 - modalPos.width / 2,
    },
    'bottom': {
      top: bottom + MARGIN,
      left: left + width / 2 - modalPos.width / 2,
    },
    'left': {
      top: top + height / 2 - modalPos.height / 2,
      left: left - modalPos.width - MARGIN,
    },
    'right': {
      top: top + height / 2 - modalPos.height / 2,
      left: left + width + MARGIN,
    },
    'top-right': {
      top: top - modalPos.height - MARGIN,
      left: left + width - modalPos.width,
    },
    'top-left': {
      top: top - modalPos.height - MARGIN,
      left,
    },
    'bottom-right': {
      top: bottom + MARGIN,
      left: left + width - modalPos.width,
    },
    'bottom-left': {
      top: bottom + MARGIN,
      left,
    },
    'right-top': {
      top,
      left: left + width + MARGIN,
    },
    'left-top': {
      top,
      left: left - modalPos.width - MARGIN,
    },
    'right-bottom': {
      top: bottom - modalPos.height,
      left: left + width + MARGIN,
    },
    'left-bottom': {
      top: bottom - modalPos.height,
      left: left - modalPos.width - MARGIN,
    },
  };

  const offset = {
    x: customOffset.x || 0,
    y: customOffset.y || 0,
  };

  const position = transform[placement];

  return {
    position: anchorPosition === 'fixed' ? 'fixed' : 'absolute',
    top: position.top + offset.y,
    left: position.left + offset.x,
  };
};
