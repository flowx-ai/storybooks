import { ComponentPropsWithRef, ReactElement } from '../../../../../../../../node_modules/react';
import { FlxIconProps } from '../../../icon/Icon';
export interface FlxMultiSelectOptionProps extends ComponentPropsWithRef<'div'> {
    isSelected?: boolean;
    disabled?: boolean;
    label: string;
    className?: string;
    selectedIcon?: ReactElement<FlxIconProps> | null;
    unselectedIcon?: ReactElement<FlxIconProps> | null;
    isFocused?: boolean;
}
export declare const FlxMultiSelectOption: {
    ({ isSelected, label, disabled, className, onClick, selectedIcon, unselectedIcon, isFocused, ref, ...props }: FlxMultiSelectOptionProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const MemoFlxMultiSelectOption: import('../../../../../../../../node_modules/react').MemoExoticComponent<{
    ({ isSelected, label, disabled, className, onClick, selectedIcon, unselectedIcon, isFocused, ref, ...props }: FlxMultiSelectOptionProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}>;
declare const _default: {
    FlxMultiSelectOption: {
        ({ isSelected, label, disabled, className, onClick, selectedIcon, unselectedIcon, isFocused, ref, ...props }: FlxMultiSelectOptionProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    MemoFlxMultiSelectOption: import('../../../../../../../../node_modules/react').MemoExoticComponent<{
        ({ isSelected, label, disabled, className, onClick, selectedIcon, unselectedIcon, isFocused, ref, ...props }: FlxMultiSelectOptionProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    }>;
};
export default _default;
