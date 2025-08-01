import { FC, ComponentPropsWithRef, ReactElement } from '../../../../../../../node_modules/react';
import { FlxIconProps } from '../../icon/Icon';
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
    error?: boolean;
    disabled?: boolean;
    clearIcon?: ReactElement<FlxIconProps> | null;
    clearFn?: () => void;
    hasClear?: boolean;
    calendarClassName?: string;
}
export declare const FlxDatePicker: FC<FlxDatePickerProps>;
export interface FlxDatePickerContainerProps extends ComponentPropsWithRef<'div'> {
    dataUniqueid?: string;
    dataTestId?: string;
}
export declare const FlxDatePickerContainer: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxDatePickerContainerProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const MemoFlxDatePicker: import('../../../../../../../node_modules/react').NamedExoticComponent<FlxDatePickerProps>;
declare const _default: {
    FlxDatePicker: FC<FlxDatePickerProps>;
    MemoFlxDatePicker: import('../../../../../../../node_modules/react').NamedExoticComponent<FlxDatePickerProps>;
    FlxDatePickerContainer: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxDatePickerContainerProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
};
export default _default;
