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
    clearIconAriaLabel?: string;
}
export declare const FlxTextArea: {
    ({ error, name, placeholder, clearFn, onChange, value, clearIcon, hasClear, disabled, onBlur, clearIconAriaLabel, ref, ...props }: FlxTextAreaProps & {
        ref?: React.Ref<HTMLTextAreaElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export interface FlxTextAreaContainerProps extends ComponentPropsWithRef<'div'> {
    dataUniqueid?: string;
    dataTestId?: string;
}
export declare const FlxTextAreaContainer: {
    ({ children, dataUniqueid, dataTestId, className, ref, }: FlxTextAreaContainerProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const MemoFlxTextArea: import('../../../../../../../node_modules/react').MemoExoticComponent<{
    ({ error, name, placeholder, clearFn, onChange, value, clearIcon, hasClear, disabled, onBlur, clearIconAriaLabel, ref, ...props }: FlxTextAreaProps & {
        ref?: React.Ref<HTMLTextAreaElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}>;
declare const _default: {
    FlxTextAreaInput: {
        ({ disabled, hasError, filled, placeholder, minRows, maxRows, heightType, value, onChange, ref, ...props }: FlxTextAreaInputProps & {
            ref?: React.Ref<HTMLTextAreaElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    FlxTextArea: {
        ({ error, name, placeholder, clearFn, onChange, value, clearIcon, hasClear, disabled, onBlur, clearIconAriaLabel, ref, ...props }: FlxTextAreaProps & {
            ref?: React.Ref<HTMLTextAreaElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    MemoFlxTextArea: import('../../../../../../../node_modules/react').MemoExoticComponent<{
        ({ error, name, placeholder, clearFn, onChange, value, clearIcon, hasClear, disabled, onBlur, clearIconAriaLabel, ref, ...props }: FlxTextAreaProps & {
            ref?: React.Ref<HTMLTextAreaElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    }>;
    FlxTextAreaContainer: {
        ({ children, dataUniqueid, dataTestId, className, ref, }: FlxTextAreaContainerProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export default _default;
