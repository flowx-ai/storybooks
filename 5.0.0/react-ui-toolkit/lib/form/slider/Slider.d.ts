import { ComponentPropsWithRef, ComponentPropsWithoutRef } from '../../../../../../../node_modules/react';
export interface FlxSliderProps extends ComponentPropsWithoutRef<'div'> {
    min: number;
    max: number;
    debounce?: number;
    step?: number;
    showValue?: boolean;
    suffix?: string;
    value: number;
    disabled?: boolean;
    onValueChange?: (value: string | number) => void;
    onBlur?: () => void;
    name?: string;
    displayFormatFn?: ((value: number) => string) | null;
}
export declare const FlxSlider: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<FlxSliderProps & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export interface FlxSliderContainerProps extends ComponentPropsWithRef<'div'> {
    dataUniqueid?: string;
    dataTestId?: string;
    disabled?: boolean;
}
export declare const FlxSliderContainer: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxSliderContainerProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const MemoFlxSlider: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<FlxSliderProps & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
declare const _default: {
    FlxSlider: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<FlxSliderProps & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    MemoFlxSlider: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<FlxSliderProps & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
};
export default _default;
