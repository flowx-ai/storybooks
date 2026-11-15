import { FC, ReactNode, ComponentPropsWithRef } from '../../../../../../../node_modules/react';
export interface FlxFormLabelProps extends ComponentPropsWithRef<'label'> {
    disabled?: boolean;
    markdownLabel?: boolean;
    htmlFor?: string;
}
export declare const FlxFormLabel: {
    ({ className, disabled, htmlFor, children, ref, ...props }: FlxFormLabelProps & {
        ref?: React.Ref<HTMLLabelElement>;
    }): import("react").JSX.Element;
    displayName: string;
};
export declare const MemoFlxFormLabel: import('../../../../../../../node_modules/react').MemoExoticComponent<{
    ({ className, disabled, htmlFor, children, ref, ...props }: FlxFormLabelProps & {
        ref?: React.Ref<HTMLLabelElement>;
    }): import("react").JSX.Element;
    displayName: string;
}>;
export declare const FlxFormLabelContainer: FC<{
    children?: ReactNode;
    className?: string;
}>;
declare const _default: {
    FlxFormLabel: {
        ({ className, disabled, htmlFor, children, ref, ...props }: FlxFormLabelProps & {
            ref?: React.Ref<HTMLLabelElement>;
        }): import("react").JSX.Element;
        displayName: string;
    };
    MemoFlxFormLabel: import('../../../../../../../node_modules/react').MemoExoticComponent<{
        ({ className, disabled, htmlFor, children, ref, ...props }: FlxFormLabelProps & {
            ref?: React.Ref<HTMLLabelElement>;
        }): import("react").JSX.Element;
        displayName: string;
    }>;
    FlxFormLabelContainer: FC<{
        children?: ReactNode;
        className?: string;
    }>;
};
export default _default;
