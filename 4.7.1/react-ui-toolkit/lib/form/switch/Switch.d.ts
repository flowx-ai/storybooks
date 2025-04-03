import { ErrorDisplayType } from '../error/FormError';
import { FieldError } from 'react-hook-form';
import { CSSProperties, ComponentPropsWithRef } from '../../../../../../../node_modules/react';

export type SwitchLabelPosition = 'start' | 'end';
export declare const DefaultSwitchLabelPosition: SwitchLabelPosition;
export interface FlxSwitchProps extends Omit<ComponentPropsWithRef<'input'>, 'onChange' | 'value'> {
    labelPosition?: SwitchLabelPosition;
    className?: string;
    style?: CSSProperties;
    onChange?: (e: boolean) => void;
    value?: boolean;
    error?: FieldError;
    dataUniqueid?: string;
    dataTestId?: string;
    errorDisplayType?: ErrorDisplayType;
}
export declare const FlxSwitch: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxSwitchProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const MemoFlxSwitch: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxSwitchProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
declare const _default: {
    FlxSwitch: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxSwitchProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    MemoFlxSwitch: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxSwitchProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
};
export default _default;
