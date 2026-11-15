import { Switch } from '@base-ui/react/switch';
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
export declare const FlxSwitchContainer: {
    ({ children, dataUniqueid, dataTestId, labelPosition, className, ref, ...props }: FlxSwitchContainerProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import('../../../../../../../node_modules/react').JSX.Element;
    displayName: string;
};
export declare const MemoFlxSwitch: import('../../../../../../../node_modules/react').NamedExoticComponent<FlxSwitchProps>;
declare const _default: {
    FlxSwitch: FC<FlxSwitchProps>;
    MemoFlxSwitch: import('../../../../../../../node_modules/react').NamedExoticComponent<FlxSwitchProps>;
    FlxSwitchContainer: {
        ({ children, dataUniqueid, dataTestId, labelPosition, className, ref, ...props }: FlxSwitchContainerProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import('../../../../../../../node_modules/react').JSX.Element;
        displayName: string;
    };
};
export default _default;
