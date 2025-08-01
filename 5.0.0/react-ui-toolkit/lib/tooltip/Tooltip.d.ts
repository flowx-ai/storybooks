import { ComponentPropsWithRef } from '../../../../../../node_modules/react';
export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
export interface FlxTooltipProps extends ComponentPropsWithRef<'div'> {
    position?: TooltipPosition;
}
export declare const FlxTooltip: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxTooltipProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const MemoFlxTooltip: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxTooltipProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
declare const _default: {
    MemoFlxTooltip: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxTooltipProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
    FlxTooltip: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxTooltipProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
};
export default _default;
