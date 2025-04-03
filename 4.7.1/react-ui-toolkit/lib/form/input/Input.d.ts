import { ErrorDisplayType } from '../error/FormError';
import { FlxIconProps } from '../../icon/Icon';
import { FieldError } from 'react-hook-form';
import { ComponentPropsWithRef, ElementType, ReactElement } from '../../../../../../../node_modules/react';

export interface FlxInputFieldProps extends ComponentPropsWithRef<'input'> {
    placeholder?: string;
}
export declare const FlxInputField: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxInputFieldProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLInputElement>>;
export interface FlxInputProps extends ComponentPropsWithRef<'div'> {
    prefixIcon?: ElementType<FlxIconProps> | null;
    prefix?: string;
    suffixIcon?: ElementType<FlxIconProps> | null;
    suffix?: string;
    placeholder?: string;
    error?: FieldError;
    clearIcon?: ReactElement<FlxIconProps> | null;
    clearFn?: () => void;
    hasClear?: boolean;
    dataUniqueid?: string;
    disabled?: boolean;
    filled?: boolean;
    errorDisplayType?: ErrorDisplayType;
}
export declare const FlxInput: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxInputProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const MemoFlxInput: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxInputProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
declare const _default: {
    FlxInput: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxInputProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    MemoFlxInput: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxInputProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
};
export default _default;
