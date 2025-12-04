import { FC, ReactElement } from '../../../../../../../node_modules/react';
import { Radio } from '@base-ui-components/react/radio';
import { RadioGroup } from '@base-ui-components/react/radio-group';
import { FlxIconProps } from '../../icon/Icon';
export interface FlxRadioGroupContextValue {
    noBorder?: boolean;
    value?: unknown;
}
export interface FlxRadioProps extends Radio.Root.Props {
    choiceIconSelected?: ReactElement<FlxIconProps> | null;
    choiceIconUnselected?: ReactElement<FlxIconProps> | null;
    label: string;
}
export declare const FlxRadio: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<FlxRadioProps & import('../../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export declare const MemoFlxRadio: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<FlxRadioProps & import('../../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>>;
export interface FlxRadioGroupProps extends RadioGroup.Props {
    noBorder?: boolean;
}
export declare const FlxRadioGroup: FC<FlxRadioGroupProps>;
export declare const MemoFlxRadioGroup: import('../../../../../../../node_modules/react').NamedExoticComponent<FlxRadioGroupProps>;
declare const _default: {
    FlxRadio: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<FlxRadioProps & import('../../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
    FlxRadioGroup: FC<FlxRadioGroupProps>;
    MemoFlxRadio: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<FlxRadioProps & import('../../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>>;
    MemoFlxRadioGroup: import('../../../../../../../node_modules/react').NamedExoticComponent<FlxRadioGroupProps>;
};
export default _default;
