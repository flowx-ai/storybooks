import { ReactElement } from '../../../../../../../../node_modules/react';
import { FlxIconProps } from '../../../icon/Icon';
interface UseComputedClearIconProps {
    hasClear?: boolean;
    filled: boolean;
    resetFieldFn?: () => void;
    clearIcon?: ReactElement<FlxIconProps> | null;
    className?: string;
    disabled?: boolean;
    inputRef?: React.RefObject<HTMLInputElement | HTMLTextAreaElement> | null;
    clearIconAriaLabel?: string;
    onFocus?: () => void;
    onBlur?: (e: React.FocusEvent) => void;
    preventInputFocus?: boolean;
}
export declare const useComputedClearIcon: ({ filled, hasClear, clearIcon, resetFieldFn, className, disabled, inputRef, clearIconAriaLabel, onFocus, onBlur, preventInputFocus, }: UseComputedClearIconProps) => {
    clearIconComponent: import("react/jsx-runtime").JSX.Element | null;
    clearIconRef: import('../../../../../../../../node_modules/react').RefObject<HTMLDivElement>;
};
export {};
