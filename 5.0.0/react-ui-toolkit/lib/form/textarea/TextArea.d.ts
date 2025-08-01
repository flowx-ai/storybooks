import { ComponentPropsWithRef, ReactElement } from '../../../../../../../node_modules/react';
import { FlxIconProps } from '../../icon/Icon';
export interface FlxTextAreaInputProps extends ComponentPropsWithRef<'textarea'> {
    hasError?: boolean;
    filled?: boolean;
    placeholder?: string;
    minRows?: number;
    maxRows?: number;
    heightType?: 'fixed' | 'auto';
}
export interface FlxTextAreaProps extends Pick<FlxTextAreaInputProps, 'placeholder' | 'minRows' | 'maxRows' | 'heightType'>, ComponentPropsWithRef<'textarea'> {
    error?: boolean;
    clearFn?: () => void;
    hasClear?: boolean;
    clearIcon?: ReactElement<FlxIconProps> | null;
}
export declare const FlxTextArea: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxTextAreaProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLTextAreaElement>>;
export interface FlxTextAreaContainerProps extends ComponentPropsWithRef<'div'> {
    dataUniqueid?: string;
    dataTestId?: string;
}
export declare const FlxTextAreaContainer: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxTextAreaContainerProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const MemoFlxTextArea: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxTextAreaProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLTextAreaElement>>>;
declare const _default: {
    FlxTextAreaInput: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxTextAreaInputProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLTextAreaElement>>;
    FlxTextArea: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxTextAreaProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLTextAreaElement>>;
    MemoFlxTextArea: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxTextAreaProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLTextAreaElement>>>;
    FlxTextAreaContainer: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxTextAreaContainerProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
};
export default _default;
