import { ComponentPropsWithRef, ComponentPropsWithoutRef, ReactElement } from '../../../../../../../node_modules/react';
import { FlxIconProps } from '../../icon/Icon';
export interface FlxRadioGroupContextValue {
    name: string;
    disabled?: boolean;
    noBorder?: boolean;
    value?: string;
    onValueChange?: (value: string) => void;
}
export declare const FlxRadioInput: ({ style, checked, ...props }: ComponentPropsWithoutRef<"input">) => import("react/jsx-runtime").JSX.Element;
export interface FlxRadioProps extends ComponentPropsWithRef<'button'> {
    choiceIconSelected?: ReactElement<FlxIconProps> | null;
    choiceIconUnselected?: ReactElement<FlxIconProps> | null;
    label: string;
}
export declare const FlxRadio: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxRadioProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export declare const MemoFlxRadio: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxRadioProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>>;
export interface FlxRadioGroupProps extends ComponentPropsWithRef<'div'> {
    name: string;
    disabled?: boolean;
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    noBorder?: boolean;
}
export declare const FlxRadioGroup: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxRadioGroupProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const MemoFlxRadioGroup: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxRadioGroupProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
declare const _default: {
    FlxRadio: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxRadioProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
    FlxRadioGroup: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxRadioGroupProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    MemoFlxRadio: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxRadioProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>>;
    MemoFlxRadioGroup: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxRadioGroupProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
    FlxRadioInput: ({ style, checked, ...props }: ComponentPropsWithoutRef<"input">) => import("react/jsx-runtime").JSX.Element;
    MemoFlxRadioInput: import('../../../../../../../node_modules/react').MemoExoticComponent<({ style, checked, ...props }: ComponentPropsWithoutRef<"input">) => import("react/jsx-runtime").JSX.Element>;
};
export default _default;
