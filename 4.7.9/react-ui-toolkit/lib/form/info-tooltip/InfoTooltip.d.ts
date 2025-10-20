import { FlxIconProps } from '../../icon/Icon';
import { ComponentPropsWithRef, ReactElement } from '../../../../../../../node_modules/react';

export interface FlxFormInfoHelperProps extends ComponentPropsWithRef<'div'> {
    iconComponent?: ReactElement<FlxIconProps> | null;
}
export declare const FlxFormInfoHelper: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxFormInfoHelperProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const MemoFlxFormInfoHelper: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxFormInfoHelperProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
declare const _default: {
    FlxFormInfoHelper: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxFormInfoHelperProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    MemoFlxFormInfoHelper: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxFormInfoHelperProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
};
export default _default;
