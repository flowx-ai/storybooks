import { FlxIconProps } from '../../icon/Icon';
import { ErrorDisplayType } from '../error/FormError';
import { FieldError } from 'react-hook-form';
import { ComponentPropsWithRef, ReactElement, RefObject } from '../../../../../../../node_modules/react';

export interface FlxTextAreaInputProps extends ComponentPropsWithRef<'textarea'> {
    hasError?: boolean;
    filled?: boolean;
    placeholder?: string;
    minRows?: number;
    maxRows?: number;
    heightType?: 'fixed' | 'auto';
}
export interface FlxTextAreaProps extends Pick<FlxTextAreaInputProps, 'placeholder' | 'minRows' | 'maxRows' | 'heightType'>, ComponentPropsWithRef<'textarea'> {
    error?: FieldError;
    clearFn?: () => void;
    hasClear?: boolean;
    clearIcon?: ReactElement<FlxIconProps> | null;
    dataUniqueid?: string;
    dataTestId?: string;
    errorDisplayType?: ErrorDisplayType;
    textAreaRef?: RefObject<HTMLTextAreaElement>;
}
export declare const FlxTextArea: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxTextAreaProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const MemoFlxTextArea: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxTextAreaProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
declare const _default: {
    FlxTextAreaInput: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxTextAreaInputProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLTextAreaElement>>;
    FlxTextArea: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxTextAreaProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    MemoFlxTextArea: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxTextAreaProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
};
export default _default;
