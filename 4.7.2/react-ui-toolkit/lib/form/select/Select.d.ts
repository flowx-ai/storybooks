import { FlxIconProps } from '../../icon/Icon';
import { FieldError } from 'react-hook-form';
import { ReactElement, ComponentPropsWithoutRef, ElementType } from '../../../../../../../node_modules/react';

export interface Option<T> {
    value: T;
    label: string;
}
export interface FlxSelectProps<T> extends Omit<ComponentPropsWithoutRef<'div'>, 'onBlur' | 'onChange'> {
    name?: string;
    className?: string;
    optionClassName?: string;
    disabled?: boolean;
    hasSearch?: boolean;
    placeholder?: string;
    emptyMessage?: string;
    prefixIcon?: ElementType<FlxIconProps> | null;
    dropdownIcon?: ReactElement<FlxIconProps> | null;
    options: Option<T>[];
    onChange?: (value: T) => void;
    value: T;
    clearFn?: () => void;
    onBlur?: () => void;
    hasClear?: boolean;
    clearIcon?: ReactElement<FlxIconProps> | null;
    error?: FieldError;
    dataUniqueid?: string;
    dataTestId?: string;
    onSearch?: (searchText: string) => Promise<void>;
    useServerFiltering?: boolean;
}
export declare const FlxSelect: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<FlxSelectProps<unknown> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const MemoFlxSelect: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<FlxSelectProps<unknown> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
declare const _default: {
    FlxSelect: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<FlxSelectProps<unknown> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    MemoFlxSelect: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<FlxSelectProps<unknown> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
};
export default _default;
