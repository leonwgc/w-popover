export declare type SinglePlacement = 'top' | 'bottom' | 'left' | 'right';
export declare type Placement = 'top' | 'left' | 'bottom' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom' | SinglePlacement;
export interface ITargetPos {
    left: number;
    top: number;
    width: number;
    height: number;
}
/**
 * attach static props to component
 *
 * @export
 * @template C
 * @template P
 * @param {C} component
 * @param {P} properties
 * @return {*}  {(C & P)}
 */
export declare function attachPropertiesToComponent<C, P extends Record<string, any>>(component: C, properties: P): C & P;
