import { FC, ComponentPropsWithoutRef } from '../../../../../../../node_modules/react';
export type SegmentedButtonOption<T> = T & {
    label: string;
    value: T;
};
export interface FlxSegmentedButtonContextValue<T> {
    disabled?: boolean;
    value: T | SegmentedButtonOption<T>;
    onValueChange?: (value: SegmentedButtonOption<T>) => void;
}
export interface FlxSegmentedOptionProps<T> extends Omit<ComponentPropsWithoutRef<'button'>, 'value'> {
    value: SegmentedButtonOption<T>;
}
export declare const FlxSegmentedOption: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<FlxSegmentedOptionProps<unknown> & import('../../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export declare const MemoFlxSegmentedOption: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<FlxSegmentedOptionProps<unknown> & import('../../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>>;
export interface FlxSegmentedButtonProps<T> extends ComponentPropsWithoutRef<'div'> {
    value: SegmentedButtonOption<T>;
    onValueChange?: (value: SegmentedButtonOption<T>) => void;
    disabled?: boolean;
}
export declare const FlxSegmentedButton: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<FlxSegmentedButtonProps<unknown> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const FlxSegmentedOptionsContainer: FC<ComponentPropsWithoutRef<'div'>>;
export declare const MemoFlxSegmentedButton: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<FlxSegmentedButtonProps<unknown> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
declare const _default: {
    FlxSegmentedButton: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<FlxSegmentedButtonProps<unknown> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    FlxSegmentedOption: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<FlxSegmentedOptionProps<unknown> & import('../../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
    MemoFlxSegmentedButton: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<FlxSegmentedButtonProps<unknown> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
    MemoFlxSegmentedOption: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<FlxSegmentedOptionProps<unknown> & import('../../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>>;
};
export default _default;
