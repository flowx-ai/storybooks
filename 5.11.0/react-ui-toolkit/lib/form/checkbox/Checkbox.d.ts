import { FC, ReactElement } from '../../../../../../../node_modules/react';
import { Checkbox } from '@base-ui/react/checkbox';
import { CheckboxGroup } from '@base-ui/react/checkbox-group';
import { FlxIconProps } from '../../icon/Icon';
export interface FlxCheckboxGroupContextValue {
    noBorder?: boolean;
}
export interface FlxCheckboxProps extends Checkbox.Root.Props {
    choiceIconSelected?: ReactElement<FlxIconProps> | null;
    choiceIconUnselected?: ReactElement<FlxIconProps> | null;
    reversedLabel?: boolean;
    label: string;
    disabled?: boolean;
}
export declare const FlxCheckbox: {
    ({ label, choiceIconSelected, choiceIconUnselected, disabled, reversedLabel, value, className, checked, onBlur, ref, ...props }: FlxCheckboxProps & {
        ref?: React.Ref<HTMLButtonElement>;
    }): import("react").JSX.Element;
    displayName: string;
};
export interface FlxCheckboxGroupProps extends CheckboxGroup.Props {
    noBorder?: boolean;
}
export declare const FlxCheckboxGroup: FC<FlxCheckboxGroupProps>;
export declare const MemoFlxCheckboxGroup: import('../../../../../../../node_modules/react').NamedExoticComponent<FlxCheckboxGroupProps>;
declare const _default: {
    FlxCheckboxGroup: FC<FlxCheckboxGroupProps>;
    FlxCheckbox: {
        ({ label, choiceIconSelected, choiceIconUnselected, disabled, reversedLabel, value, className, checked, onBlur, ref, ...props }: FlxCheckboxProps & {
            ref?: React.Ref<HTMLButtonElement>;
        }): import("react").JSX.Element;
        displayName: string;
    };
    MemoFlxCheckboxGroup: import('../../../../../../../node_modules/react').NamedExoticComponent<FlxCheckboxGroupProps>;
};
export default _default;
