import { FlxIconProps } from '../../icon/Icon';
import { RegisterOptions } from 'react-hook-form';
import { default as React, ReactNode, ReactElement } from '../../../../../../../node_modules/react';

interface FlxFormFieldContextValue {
    label?: string;
    name: string;
    helperText?: string;
    hideInsideInfoPoint?: boolean;
    hasClear?: boolean;
    clearIcon?: ReactElement<FlxIconProps> | null;
    helperIcon?: ReactElement<FlxIconProps> | null;
    clearFn?: () => void;
    disabled?: boolean;
    rules?: RegisterOptions;
    showError?: boolean;
    classNames?: {
        label?: string;
        helper?: string;
        helperTooltip?: string;
        error?: string;
    };
}
declare const FlxFormFieldContext: React.Context<FlxFormFieldContextValue>;
export interface FlxFormFieldProps extends FlxFormFieldContextValue {
    children: ReactNode;
}
declare const FlxFormField: ({ name, label, helperText, hasClear, clearIcon, helperIcon, disabled, hideInsideInfoPoint, rules, clearFn, children, showError, classNames, }: FlxFormFieldProps) => import("react/jsx-runtime").JSX.Element;
export { FlxFormFieldContextValue, FlxFormFieldContext, FlxFormField };
