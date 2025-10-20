import { ReactElement } from '../../../../../../../../node_modules/react';
import { FlxIconProps } from '../../../icon/Icon';
interface UseComputedClearIconProps {
    hasClear?: boolean;
    filled: boolean;
    resetFieldFn?: () => void;
    clearIcon?: ReactElement<FlxIconProps> | null;
    className?: string;
}
export declare const useComputedClearIcon: ({ filled, hasClear, clearIcon, resetFieldFn, className, }: UseComputedClearIconProps) => {
    clearIconComponent: import("react/jsx-runtime").JSX.Element | null;
};
export {};
