import { FlxIconProps } from '../../icon/Icon';
import { ErrorDisplayType } from '../error/FormError';
import { FieldError } from 'react-hook-form';
import { ComponentPropsWithRef, ReactElement } from '../../../../../../../node_modules/react';

export declare const DefaultDateFormat = "dd.MM.yyyy";
export declare const parseDate: (date: string, dateFormat: string | ((d: Date) => string)) => Date;
interface FlxAirDatePickerProps extends Omit<ComponentPropsWithRef<'input'>, 'value'> {
    id?: string;
    name?: string;
    value?: Date;
    onValueChange?: (value: Date) => void;
    minDate?: Date;
    maxDate?: Date;
    dateFormat?: string | ((d: Date) => string);
    placeholder?: string;
    locale?: string;
    calendarAlwaysVisible?: boolean;
    disabled: boolean;
    className?: string;
    inputReadOnly?: boolean;
}
export interface FlxDatePickerProps extends Pick<FlxAirDatePickerProps, 'minDate' | 'maxDate' | 'calendarAlwaysVisible' | 'dateFormat' | 'placeholder' | 'inputReadOnly' | 'locale'>, Omit<ComponentPropsWithRef<'div'>, 'onChange'> {
    name?: string;
    dropdownIcon?: ReactElement<FlxIconProps> | null;
    calendarIcon?: ReactElement<FlxIconProps> | null;
    onBlur?: () => void;
    onValueChange?: (value: Date) => void;
    value?: Date;
    error?: FieldError;
    disabled?: boolean;
    clearIcon?: ReactElement<FlxIconProps> | null;
    clearFn?: () => void;
    hasClear?: boolean;
    calendarClassName?: string;
    dataUniqueid?: string;
    dataTestId?: string;
    errorDisplayType?: ErrorDisplayType;
}
export declare const FlxDatePicker: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxDatePickerProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const MemoFlxDatePicker: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxDatePickerProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
declare const _default: {
    FlxDatePicker: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxDatePickerProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    MemoFlxDatePicker: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxDatePickerProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
};
export default _default;
