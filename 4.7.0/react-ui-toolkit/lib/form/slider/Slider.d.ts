import { FieldError } from 'react-hook-form';
import { ComponentPropsWithRef } from '../../../../../../../node_modules/react';

export interface FlxSliderProps extends ComponentPropsWithRef<'div'> {
    min: number;
    max: number;
    debounce?: number;
    step?: number;
    showValue?: boolean;
    suffix?: string;
    value: number;
    disabled?: boolean;
    onValueChange?: (value: string | number, effectChange?: boolean) => void;
    onBlur?: () => void;
    error?: FieldError;
    name?: string;
    dataUniqueid?: string;
    dataTestId?: string;
    displayFormatFn?: (value: number) => string;
}
export declare const FlxSlider: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxSliderProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const MemoFlxSlider: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxSliderProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
declare const _default: {
    FlxSlider: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxSliderProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    MemoFlxSlider: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxSliderProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
};
export default _default;
