import { ComponentPropsWithRef, ElementType, ReactElement, FC } from '../../../../../../../node_modules/react';
import { FlxIconProps } from '../../icon/Icon';
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
    error?: boolean;
    clearIcon?: ReactElement<FlxIconProps> | null;
    clearFn?: () => void;
    hasClear?: boolean;
    disabled?: boolean;
    filled?: boolean;
    clearIconAriaLabel?: string;
}
export declare const FlxInput: FC<FlxInputProps>;
export declare const MemoFlxInput: import('../../../../../../../node_modules/react').NamedExoticComponent<FlxInputProps>;
export interface FlxInputContainerProps extends ComponentPropsWithRef<'div'> {
    dataUniqueid?: string;
}
export declare const FlxInputContainer: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxInputContainerProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const MemoFlxInputContainer: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxInputContainerProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
declare const _default: {
    FlxInput: FC<FlxInputProps>;
    MemoFlxInput: import('../../../../../../../node_modules/react').NamedExoticComponent<FlxInputProps>;
    FlxInputContainer: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxInputContainerProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    MemoFlxInputContainer: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxInputContainerProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
};
export default _default;
