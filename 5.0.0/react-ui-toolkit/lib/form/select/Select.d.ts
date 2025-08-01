import { ChangeEvent, ReactElement, ComponentPropsWithoutRef, ElementType, ComponentPropsWithRef } from '../../../../../../../node_modules/react';
import { MultiSelectOptionsDisplayModeType } from '@flowx/core-sdk';
import { FlxIconProps } from '../../icon/Icon';
export interface Option<T> {
    value: T;
    label: string;
    enabled?: boolean;
}
export interface FlxSelectProps<T> extends Omit<ComponentPropsWithoutRef<'div'>, 'onBlur' | 'onChange' | 'children'> {
    name?: string;
    optionClassName?: string;
    listClassName?: string;
    disabled?: boolean;
    hasSearch?: boolean;
    placeholder?: string;
    emptyMessage?: string;
    prefixIcon?: ElementType<FlxIconProps> | null;
    dropdownIcon?: ReactElement<FlxIconProps> | null;
    options: Option<T>[];
    onChange?: (value: Option<T> | Option<T>[] | null) => void;
    value: Option<T> | Option<T>[] | null;
    clearFn?: () => void;
    onBlur?: () => void;
    hasClear?: boolean;
    clearIcon?: ReactElement<FlxIconProps> | null;
    error?: boolean;
    onSearch?: (searchText: string) => Promise<void>;
    useServerFiltering?: boolean;
    multiselect?: boolean;
    /**
     * The component to render the multi-select search.
     * Only applicable to multi-select.
     */
    multiSelectSearch?: (props: {
        searchText: string;
        onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
        toggleAll: () => void;
        isAllSelected: boolean;
        isIndeterminate: boolean;
    }) => ReactElement | null;
    /**
     * The component to render the multi-select selections.
     * Only applicable to multi-select.
     */
    multiSelectSelections?: (props: {
        options: Option<T>[];
        onClose: (option: Option<T>) => void;
    }) => ReactElement | null;
    /**
     * Maximum number of options that can be selected.
     * Only applicable to multi-select.
     */
    maxSelectable?: number;
    /**
     * The display mode of the options in the dropdown.
     * Only applicable to multi-select.
     * @default MultiSelectOptionsDisplayModeType.COMMA_SEPARATED
     */
    optionsDisplayMode?: MultiSelectOptionsDisplayModeType;
    children: (option: Option<T>, onClick: () => void, isSelected: boolean, isDisabled?: boolean) => ReactElement | null;
}
export declare const FlxSelect: {
    <T>({ optionClassName, listClassName, name, disabled, hasSearch, placeholder, emptyMessage, prefixIcon: PrefixIcon, dropdownIcon, options, value, onChange, hasClear, clearIcon, clearFn, onFocus, onBlur, error, onSearch, useServerFiltering, multiselect, children: renderOptions, multiSelectSearch, multiSelectSelections, maxSelectable, optionsDisplayMode, ...props }: FlxSelectProps<T>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const MemoFlxSelect: import('../../../../../../../node_modules/react').MemoExoticComponent<{
    <T>({ optionClassName, listClassName, name, disabled, hasSearch, placeholder, emptyMessage, prefixIcon: PrefixIcon, dropdownIcon, options, value, onChange, hasClear, clearIcon, clearFn, onFocus, onBlur, error, onSearch, useServerFiltering, multiselect, children: renderOptions, multiSelectSearch, multiSelectSelections, maxSelectable, optionsDisplayMode, ...props }: FlxSelectProps<T>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}>;
export interface FlxSelectContainerProps extends ComponentPropsWithRef<'div'> {
    dataUniqueid?: string;
    dataTestId?: string;
}
export declare const FlxSelectContainer: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxSelectContainerProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
declare const _default: {
    FlxSelect: {
        <T>({ optionClassName, listClassName, name, disabled, hasSearch, placeholder, emptyMessage, prefixIcon: PrefixIcon, dropdownIcon, options, value, onChange, hasClear, clearIcon, clearFn, onFocus, onBlur, error, onSearch, useServerFiltering, multiselect, children: renderOptions, multiSelectSearch, multiSelectSelections, maxSelectable, optionsDisplayMode, ...props }: FlxSelectProps<T>): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    MemoFlxSelect: import('../../../../../../../node_modules/react').MemoExoticComponent<{
        <T>({ optionClassName, listClassName, name, disabled, hasSearch, placeholder, emptyMessage, prefixIcon: PrefixIcon, dropdownIcon, options, value, onChange, hasClear, clearIcon, clearFn, onFocus, onBlur, error, onSearch, useServerFiltering, multiselect, children: renderOptions, multiSelectSearch, multiSelectSelections, maxSelectable, optionsDisplayMode, ...props }: FlxSelectProps<T>): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    }>;
    FlxSelectContainer: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxSelectContainerProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
};
export default _default;
