import { FC, ReactElement } from '../../../../../../../node_modules/react';
import { Checkbox } from '@base-ui-components/react/checkbox';
import { CheckboxGroup } from '@base-ui-components/react/checkbox-group';
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
export declare const FlxCheckbox: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<FlxCheckboxProps & import('../../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export interface FlxCheckboxGroupProps extends CheckboxGroup.Props {
    noBorder?: boolean;
}
export declare const FlxCheckboxGroup: FC<FlxCheckboxGroupProps>;
export declare const MemoFlxCheckboxGroup: import('../../../../../../../node_modules/react').NamedExoticComponent<FlxCheckboxGroupProps>;
declare const _default: {
    FlxCheckboxGroup: FC<FlxCheckboxGroupProps>;
    FlxCheckbox: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<FlxCheckboxProps & import('../../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
    MemoFlxCheckboxGroup: import('../../../../../../../node_modules/react').NamedExoticComponent<FlxCheckboxGroupProps>;
};
export default _default;
