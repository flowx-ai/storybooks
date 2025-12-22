import { ComponentPropsWithRef, SyntheticEvent } from '../../../../../../node_modules/react';

export interface FlxIconProps extends ComponentPropsWithRef<'div'> {
    name?: string;
    path?: string;
    className?: string;
    onClick?: (event: SyntheticEvent) => void;
    onIconLoad?: (success: boolean) => void;
}
export declare const FlxIcon: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxIconProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const MemoFlxIcon: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxIconProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
declare const _default: {
    FlxIcon: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxIconProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    MemoFlxIcon: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxIconProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
};
export default _default;
