import { FlxChoiceGroupProps } from '../choice-group/ChoiceGroup';
import { FlxIconProps } from '../../icon/Icon';
import { ComponentPropsWithRef, ComponentPropsWithoutRef, ReactElement } from '../../../../../../../node_modules/react';

export interface FlxCheckboxGroupContextValue {
    noBorder?: boolean;
}
type CheckedState = boolean | 'indeterminate';
export interface FlxCheckboxInputProps extends Omit<ComponentPropsWithoutRef<'input'>, 'checked'> {
    checked?: CheckedState;
}
export interface FlxCheckboxProps extends Omit<ComponentPropsWithRef<'button'>, 'defaultChecked'> {
    choiceIconSelected?: ReactElement<FlxIconProps> | null;
    choiceIconUnselected?: ReactElement<FlxIconProps> | null;
    reversedLabel?: boolean;
    checked?: CheckedState;
    defaultChecked?: CheckedState;
    value?: string;
    onCheckedChange?: (checked: CheckedState) => void;
    label: string;
}
export declare const FlxCheckbox: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxCheckboxProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export interface FlxCheckboxGroupProps extends FlxChoiceGroupProps, FlxCheckboxGroupContextValue {
}
export declare const FlxCheckboxGroup: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxCheckboxGroupProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const MemoFlxCheckboxGroup: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxCheckboxGroupProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
declare const _default: {
    FlxCheckboxGroup: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxCheckboxGroupProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    FlxCheckbox: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxCheckboxProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
    MemoFlxCheckboxGroup: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxCheckboxGroupProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
};
export default _default;
