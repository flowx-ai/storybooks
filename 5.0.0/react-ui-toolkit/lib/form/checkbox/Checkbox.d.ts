import { FC, ComponentPropsWithRef, ComponentPropsWithoutRef, ReactElement } from '../../../../../../../node_modules/react';
import { FlxIconProps } from '../../icon/Icon';
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
    disabled?: boolean;
}
export declare const FlxCheckbox: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxCheckboxProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export interface FlxCheckboxGroupProps extends ComponentPropsWithRef<'div'> {
    noBorder?: boolean;
}
export declare const FlxCheckboxGroup: FC<FlxCheckboxGroupProps>;
export declare const MemoFlxCheckboxGroup: import('../../../../../../../node_modules/react').NamedExoticComponent<FlxCheckboxGroupProps>;
declare const _default: {
    FlxCheckboxGroup: FC<FlxCheckboxGroupProps>;
    FlxCheckbox: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxCheckboxProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
    MemoFlxCheckboxGroup: import('../../../../../../../node_modules/react').NamedExoticComponent<FlxCheckboxGroupProps>;
};
export default _default;
