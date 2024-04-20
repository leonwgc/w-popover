import React from 'react';
import { TargetType } from 'src/types';
/**
 * Get target element.
 * @param elRef
 * @returns
 */
export declare const getElement: (elRef: React.MutableRefObject<TargetType>) => HTMLElement;
/**
 * Get event target.
 * @param target
 * @param defaultTarget
 * @returns
 */
export declare const getEventTarget: (target: any, defaultTarget: any) => Element;
/**
 * Apply style / className to element.
 * @param el
 * @param styleOrCls
 * @param toBeRemovedCls
 */
export declare const applyStyleOrClsToElement: (el: HTMLElement, styleOrCls: React.CSSProperties | string, toBeRemovedCls: React.CSSProperties | string) => void;
