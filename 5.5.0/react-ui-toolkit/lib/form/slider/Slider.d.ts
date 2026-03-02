import { ComponentPropsWithRef } from '../../../../../../../node_modules/react';
import { Slider } from '@base-ui-components/react/slider';
export interface FlxSliderProps extends Omit<Slider.Root.Props, 'min' | 'max' | 'value' | 'onValueChange'> {
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
    'aria-invalid'?: boolean;
    'aria-errormessage'?: string;
    'debounce'?: number;
    'showValue'?: boolean;
    'suffix'?: string;
    'min': number;
    'max': number;
    'value': number;
    'onValueChange'?: (value: number) => void;
    'onBlur'?: () => void;
    'displayFormatFn'?: ((value: number) => string) | null;
}
export declare const FlxSlider: ({ id, min, max, disabled, showValue, suffix, step, onValueChange, value, name, onBlur, displayFormatFn, "aria-labelledby": ariaLabeledById, "aria-describedby": ariaDescribedbyId, "aria-invalid": ariaInvalid, "aria-errormessage": ariaErrorMessageId, ...props }: FlxSliderProps) => import("react/jsx-runtime").JSX.Element;
export interface FlxSliderContainerProps extends ComponentPropsWithRef<'div'> {
    dataUniqueid?: string;
    dataTestId?: string;
    disabled?: boolean;
}
export declare const FlxSliderContainer: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxSliderContainerProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const MemoFlxSlider: import('../../../../../../../node_modules/react').MemoExoticComponent<({ id, min, max, disabled, showValue, suffix, step, onValueChange, value, name, onBlur, displayFormatFn, "aria-labelledby": ariaLabeledById, "aria-describedby": ariaDescribedbyId, "aria-invalid": ariaInvalid, "aria-errormessage": ariaErrorMessageId, ...props }: FlxSliderProps) => import("react/jsx-runtime").JSX.Element>;
declare const _default: {
    FlxSlider: ({ id, min, max, disabled, showValue, suffix, step, onValueChange, value, name, onBlur, displayFormatFn, "aria-labelledby": ariaLabeledById, "aria-describedby": ariaDescribedbyId, "aria-invalid": ariaInvalid, "aria-errormessage": ariaErrorMessageId, ...props }: FlxSliderProps) => import("react/jsx-runtime").JSX.Element;
    MemoFlxSlider: import('../../../../../../../node_modules/react').MemoExoticComponent<({ id, min, max, disabled, showValue, suffix, step, onValueChange, value, name, onBlur, displayFormatFn, "aria-labelledby": ariaLabeledById, "aria-describedby": ariaDescribedbyId, "aria-invalid": ariaInvalid, "aria-errormessage": ariaErrorMessageId, ...props }: FlxSliderProps) => import("react/jsx-runtime").JSX.Element>;
};
export default _default;
