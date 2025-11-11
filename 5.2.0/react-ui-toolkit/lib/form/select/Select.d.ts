import { ReactElement, ComponentPropsWithoutRef, ElementType, ComponentPropsWithRef } from '../../../../../../../node_modules/react';
import { MultiSelectOptionsDisplayModeType } from '@flowx/core-sdk';
import { FlxIconProps } from '../../icon/Icon';
export interface Option<TValue = unknown> {
    value: TValue;
    label: string;
    enabled?: boolean;
}
export interface FlxSelectProps<TValue = unknown> extends Omit<ComponentPropsWithoutRef<'div'>, 'onBlur' | 'onChange' | 'children'> {
    'name'?: string;
    'labelId'?: string;
    'optionClassName'?: string;
    'listClassName'?: string;
    'disabled'?: boolean;
    'hasSearch'?: boolean;
    'placeholder'?: string;
    'emptyMessage'?: string;
    'prefixIcon'?: ElementType<FlxIconProps> | null;
    'dropdownIcon'?: ReactElement<FlxIconProps> | null;
    'options': Option<TValue>[];
    'onChange': (value: Option<TValue> | Option<TValue>[] | null) => void;
    'value': Option<TValue> | Option<TValue>[] | null;
    'clearFn'?: () => void;
    'onBlur'?: () => void;
    'hasClear'?: boolean;
    'clearIcon'?: ReactElement<FlxIconProps> | null;
    'error'?: boolean;
    'onSearch'?: (searchText: string) => Promise<void>;
    'useServerFiltering'?: boolean;
    'multiselect'?: boolean;
    /**
     * The component to render the multi-select search.
     * Only applicable to multi-select.
     */
    'multiSelectSearch'?: (props: {
        toggleAll: () => void;
        isAllSelected: boolean;
        isIndeterminate: boolean;
    }) => ReactElement | null;
    /**
     * The component to render the multi-select selections.
     * Only applicable to multi-select.
     */
    'multiSelectSelections'?: (props: {
        options: Option<TValue>[];
        onClose: (option: Option<TValue>) => void;
    }) => ReactElement | null;
    /**
     * Maximum number of options that can be selected.
     * Only applicable to multi-select.
     */
    'maxSelectable'?: number;
    /**
     * The display mode of the options in the dropdown.
     * Only applicable to multi-select.
     * @default MultiSelectOptionsDisplayModeType.COMMA_SEPARATED
     */
    'optionsDisplayMode'?: MultiSelectOptionsDisplayModeType;
    'children': (option: Option<TValue>, onSelect: () => void, isSelected: boolean, isMaxReached: boolean) => ReactElement | null;
    'readOnly'?: boolean;
    'container'?: HTMLElement;
    'clearIconAriaLabel'?: string;
    'aria-label'?: string;
}
export declare const FlxSelect: {
    <TValue = unknown>({ id, optionClassName, listClassName, name, disabled, hasSearch, placeholder, emptyMessage, "prefixIcon": PrefixIcon, dropdownIcon, options, value, onChange, hasClear, clearIcon, clearFn, onFocus, onBlur, error, onSearch, useServerFiltering, multiselect, "children": renderOptions, multiSelectSearch, multiSelectSelections, maxSelectable, optionsDisplayMode, readOnly, container, clearIconAriaLabel, "aria-label": ariaLabel, ...props }: FlxSelectProps<TValue>): ReactElement;
    displayName: string;
};
export declare const MemoFlxSelect: import('../../../../../../../node_modules/react').MemoExoticComponent<{
    <TValue = unknown>({ id, optionClassName, listClassName, name, disabled, hasSearch, placeholder, emptyMessage, "prefixIcon": PrefixIcon, dropdownIcon, options, value, onChange, hasClear, clearIcon, clearFn, onFocus, onBlur, error, onSearch, useServerFiltering, multiselect, "children": renderOptions, multiSelectSearch, multiSelectSelections, maxSelectable, optionsDisplayMode, readOnly, container, clearIconAriaLabel, "aria-label": ariaLabel, ...props }: FlxSelectProps<TValue>): ReactElement;
    displayName: string;
}>;
export interface FlxSelectContainerProps extends ComponentPropsWithRef<'div'> {
    dataUniqueid?: string;
    dataTestId?: string;
}
export declare const FlxSelectContainer: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxSelectContainerProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
declare const _default: {
    FlxSelect: {
        <TValue = unknown>({ id, optionClassName, listClassName, name, disabled, hasSearch, placeholder, emptyMessage, "prefixIcon": PrefixIcon, dropdownIcon, options, value, onChange, hasClear, clearIcon, clearFn, onFocus, onBlur, error, onSearch, useServerFiltering, multiselect, "children": renderOptions, multiSelectSearch, multiSelectSelections, maxSelectable, optionsDisplayMode, readOnly, container, clearIconAriaLabel, "aria-label": ariaLabel, ...props }: FlxSelectProps<TValue>): ReactElement;
        displayName: string;
    };
    MemoFlxSelect: import('../../../../../../../node_modules/react').MemoExoticComponent<{
        <TValue = unknown>({ id, optionClassName, listClassName, name, disabled, hasSearch, placeholder, emptyMessage, "prefixIcon": PrefixIcon, dropdownIcon, options, value, onChange, hasClear, clearIcon, clearFn, onFocus, onBlur, error, onSearch, useServerFiltering, multiselect, "children": renderOptions, multiSelectSearch, multiSelectSelections, maxSelectable, optionsDisplayMode, readOnly, container, clearIconAriaLabel, "aria-label": ariaLabel, ...props }: FlxSelectProps<TValue>): ReactElement;
        displayName: string;
    }>;
    FlxSelectContainer: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxSelectContainerProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
};
export default _default;
