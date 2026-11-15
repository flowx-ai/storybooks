import { FC, ReactElement } from '../../../../../../../node_modules/react';
import { Radio } from '@base-ui/react/radio';
import { RadioGroup } from '@base-ui/react/radio-group';
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
export declare const FlxRadio: {
    ({ label, choiceIconSelected, choiceIconUnselected, value, className, disabled, ref, ...props }: FlxRadioProps & {
        ref?: React.Ref<HTMLButtonElement>;
    }): import('../../../../../../../node_modules/react').JSX.Element;
    displayName: string;
};
export declare const MemoFlxRadio: import('../../../../../../../node_modules/react').MemoExoticComponent<{
    ({ label, choiceIconSelected, choiceIconUnselected, value, className, disabled, ref, ...props }: FlxRadioProps & {
        ref?: React.Ref<HTMLButtonElement>;
    }): import('../../../../../../../node_modules/react').JSX.Element;
    displayName: string;
}>;
export interface FlxRadioGroupProps extends RadioGroup.Props {
    noBorder?: boolean;
}
export declare const FlxRadioGroup: FC<FlxRadioGroupProps>;
export declare const MemoFlxRadioGroup: import('../../../../../../../node_modules/react').NamedExoticComponent<FlxRadioGroupProps>;
declare const _default: {
    FlxRadio: {
        ({ label, choiceIconSelected, choiceIconUnselected, value, className, disabled, ref, ...props }: FlxRadioProps & {
            ref?: React.Ref<HTMLButtonElement>;
        }): import('../../../../../../../node_modules/react').JSX.Element;
        displayName: string;
    };
    FlxRadioGroup: FC<FlxRadioGroupProps>;
    MemoFlxRadio: import('../../../../../../../node_modules/react').MemoExoticComponent<{
        ({ label, choiceIconSelected, choiceIconUnselected, value, className, disabled, ref, ...props }: FlxRadioProps & {
            ref?: React.Ref<HTMLButtonElement>;
        }): import('../../../../../../../node_modules/react').JSX.Element;
        displayName: string;
    }>;
    MemoFlxRadioGroup: import('../../../../../../../node_modules/react').NamedExoticComponent<FlxRadioGroupProps>;
};
export default _default;
