import { ComponentPropsWithRef, ElementType, ReactElement, FC } from '../../../../../../../node_modules/react';
import { FlxIconProps } from '../../icon/Icon';
export interface FlxInputFieldProps extends ComponentPropsWithRef<'input'> {
    placeholder?: string;
}
export declare const FlxInputField: {
    ({ disabled, placeholder, type, ref, ...props }: FlxInputFieldProps & {
        ref?: React.Ref<HTMLInputElement>;
    }): import('../../../../../../../node_modules/react').JSX.Element;
    displayName: string;
};
export interface FlxInputProps extends ComponentPropsWithRef<'div'> {
    prefixIcon?: ElementType<FlxIconProps> | null;
    prefix?: string;
    suffixIcon?: ElementType<FlxIconProps> | null;
    suffix?: string;
    placeholder?: string;
    error?: boolean;
    clearIcon?: ReactElement<FlxIconProps> | null;
    clearFn?: () => void;
    hasClear?: boolean;
    disabled?: boolean;
    filled?: boolean;
    clearIconAriaLabel?: string;
}
export declare const FlxInput: FC<FlxInputProps>;
export declare const MemoFlxInput: import('../../../../../../../node_modules/react').NamedExoticComponent<FlxInputProps>;
export interface FlxInputContainerProps extends ComponentPropsWithRef<'div'> {
    dataUniqueid?: string;
}
export declare const FlxInputContainer: {
    ({ dataUniqueid, className, children, ref, ...props }: FlxInputContainerProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import('../../../../../../../node_modules/react').JSX.Element;
    displayName: string;
};
export declare const MemoFlxInputContainer: import('../../../../../../../node_modules/react').MemoExoticComponent<{
    ({ dataUniqueid, className, children, ref, ...props }: FlxInputContainerProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import('../../../../../../../node_modules/react').JSX.Element;
    displayName: string;
}>;
declare const _default: {
    FlxInput: FC<FlxInputProps>;
    MemoFlxInput: import('../../../../../../../node_modules/react').NamedExoticComponent<FlxInputProps>;
    FlxInputContainer: {
        ({ dataUniqueid, className, children, ref, ...props }: FlxInputContainerProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import('../../../../../../../node_modules/react').JSX.Element;
        displayName: string;
    };
    MemoFlxInputContainer: import('../../../../../../../node_modules/react').MemoExoticComponent<{
        ({ dataUniqueid, className, children, ref, ...props }: FlxInputContainerProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import('../../../../../../../node_modules/react').JSX.Element;
        displayName: string;
    }>;
};
export default _default;
