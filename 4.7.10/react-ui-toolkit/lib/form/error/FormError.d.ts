import { FieldError } from 'react-hook-form';
import { ComponentPropsWithRef } from '../../../../../../../node_modules/react';

export type ErrorDisplayType = 'inline' | 'tooltip';
export interface FlxFormErrorProps extends ComponentPropsWithRef<'div'> {
    error?: FieldError;
    errorDisplayType?: ErrorDisplayType;
}
export declare const FlxFormError: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxFormErrorProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const MemoFlxFormError: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxFormErrorProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
declare const _default: {
    FlxFormError: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxFormErrorProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    MemoFlxFormError: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxFormErrorProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
};
export default _default;
