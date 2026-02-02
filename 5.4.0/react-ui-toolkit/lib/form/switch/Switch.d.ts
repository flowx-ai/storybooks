import { Switch } from '@base-ui-components/react/switch';
import { FC, CSSProperties, ReactElement, ComponentPropsWithRef } from '../../../../../../../node_modules/react';
import { FlxIconProps } from '../../icon/Icon';
export type SwitchLabelPosition = 'start' | 'end';
export declare const DefaultSwitchLabelPosition: SwitchLabelPosition;
export interface FlxSwitchProps extends Omit<Switch.Root.Props, 'onCheckedChange' | 'value' | 'onChange'> {
    className?: string;
    style?: CSSProperties;
    onChange?: (e: boolean) => void;
    value?: boolean;
    switchType?: 'toggle' | 'checkbox';
    checkboxIcons?: {
        selected?: ReactElement<FlxIconProps> | null;
        unselected?: ReactElement<FlxIconProps> | null;
    };
}
export declare const FlxSwitch: FC<FlxSwitchProps>;
export interface FlxSwitchContainerProps extends ComponentPropsWithRef<'div'> {
    labelPosition?: SwitchLabelPosition;
    dataUniqueid?: string;
    dataTestId?: string;
}
export declare const FlxSwitchContainer: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxSwitchContainerProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const MemoFlxSwitch: import('../../../../../../../node_modules/react').NamedExoticComponent<FlxSwitchProps>;
declare const _default: {
    FlxSwitch: FC<FlxSwitchProps>;
    MemoFlxSwitch: import('../../../../../../../node_modules/react').NamedExoticComponent<FlxSwitchProps>;
    FlxSwitchContainer: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxSwitchContainerProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
};
export default _default;
