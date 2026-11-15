import { FC, Ref, ComponentPropsWithoutRef } from '../../../../../../../node_modules/react';
import { Radio } from '@base-ui/react/radio';
export type SegmentedButtonOption<T> = {
    label: string;
    value: T;
};
export interface FlxSegmentedButtonContextValue<T> {
    disabled?: boolean;
    value: T | SegmentedButtonOption<T>;
    onValueChange?: (value: SegmentedButtonOption<T>) => void;
}
export interface FlxSegmentedOptionProps<T> extends Omit<Radio.Root.Props, 'value'> {
    name: string;
    value: SegmentedButtonOption<T>;
}
export declare const FlxSegmentedOption: {
    <T>({ value, className, disabled, ref, ...props }: FlxSegmentedOptionProps<T> & {
        ref?: Ref<HTMLButtonElement>;
    }): import("react").JSX.Element;
    displayName: string;
};
export declare const MemoFlxSegmentedOption: import('../../../../../../../node_modules/react').MemoExoticComponent<{
    <T>({ value, className, disabled, ref, ...props }: FlxSegmentedOptionProps<T> & {
        ref?: Ref<HTMLButtonElement>;
    }): import("react").JSX.Element;
    displayName: string;
}>;
export interface FlxSegmentedButtonProps<T> extends Omit<ComponentPropsWithoutRef<'div'>, 'defaultValue'> {
    value: SegmentedButtonOption<T>;
    onValueChange?: (value: SegmentedButtonOption<T>) => void;
    disabled?: boolean;
}
export declare const FlxSegmentedButton: {
    <T>({ children, disabled, onValueChange, value, className, onBlur, ref, ...props }: FlxSegmentedButtonProps<T> & {
        ref?: Ref<HTMLDivElement>;
    }): import("react").JSX.Element;
    displayName: string;
};
export declare const FlxSegmentedOptionsContainer: FC<ComponentPropsWithoutRef<'div'>>;
export declare const MemoFlxSegmentedButton: import('../../../../../../../node_modules/react').MemoExoticComponent<{
    <T>({ children, disabled, onValueChange, value, className, onBlur, ref, ...props }: FlxSegmentedButtonProps<T> & {
        ref?: Ref<HTMLDivElement>;
    }): import("react").JSX.Element;
    displayName: string;
}>;
declare const _default: {
    FlxSegmentedButton: {
        <T>({ children, disabled, onValueChange, value, className, onBlur, ref, ...props }: FlxSegmentedButtonProps<T> & {
            ref?: Ref<HTMLDivElement>;
        }): import("react").JSX.Element;
        displayName: string;
    };
    FlxSegmentedOption: {
        <T>({ value, className, disabled, ref, ...props }: FlxSegmentedOptionProps<T> & {
            ref?: Ref<HTMLButtonElement>;
        }): import("react").JSX.Element;
        displayName: string;
    };
    MemoFlxSegmentedButton: import('../../../../../../../node_modules/react').MemoExoticComponent<{
        <T>({ children, disabled, onValueChange, value, className, onBlur, ref, ...props }: FlxSegmentedButtonProps<T> & {
            ref?: Ref<HTMLDivElement>;
        }): import("react").JSX.Element;
        displayName: string;
    }>;
    MemoFlxSegmentedOption: import('../../../../../../../node_modules/react').MemoExoticComponent<{
        <T>({ value, className, disabled, ref, ...props }: FlxSegmentedOptionProps<T> & {
            ref?: Ref<HTMLButtonElement>;
        }): import("react").JSX.Element;
        displayName: string;
    }>;
};
export default _default;
