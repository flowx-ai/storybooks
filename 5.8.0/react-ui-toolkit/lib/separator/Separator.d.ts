import { ComponentPropsWithRef } from '../../../../../../node_modules/react';
export type SeparatorDirection = 'vertical' | 'horizontal';
export declare const DefaultSeparatorDirection: SeparatorDirection;
export interface FlxSeparatorProps extends ComponentPropsWithRef<'div'> {
    direction?: SeparatorDirection;
}
export declare const FlxSeparator: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxSeparatorProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const MemoFlxSeparator: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxSeparatorProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
declare const _default: {
    FlxSeparator: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxSeparatorProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    MemoFlxSeparator: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxSeparatorProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
};
export default _default;
