export declare const MARGIN = 12;
interface IModalStyle {
    position: 'absolute' | 'fixed';
    top: number;
    left: number;
}
export declare type Offset = {
    x?: number;
    y?: number;
};
/**
 * Calculate the modal's position based on its anchor element, user-defined placement and offset
 * @param {HTMLElement} modalEl
 * @param {Element} anchorEl
 * @param {Element} mountEl
 * @param {string} placement
 * @param {object} customOffset
 */
export declare const getModalStyle: (modalEl: Element, anchorEl: Element, mountEl: Element, scrollContainer: Element | Window, placement: string, customOffset: Offset) => IModalStyle;
export {};
