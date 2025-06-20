import { ToastData } from '@flowx/core-sdk';
import { ComponentPropsWithRef } from '../../../../../../node_modules/react';

export interface FlxToastProps extends ComponentPropsWithRef<'div'> {
    data: ToastData;
    onCloseToast?: (data: ToastData) => void;
}
export declare const FlxToast: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxToastProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
declare const _default: {
    MemoFlxToast: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxToastProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
    FlxToast: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxToastProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
};
export default _default;
