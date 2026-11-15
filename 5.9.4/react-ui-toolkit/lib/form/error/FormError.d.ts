import { ComponentPropsWithRef } from '../../../../../../../node_modules/react';
export interface FlxFormErrorProps extends ComponentPropsWithRef<'div'> {
    error?: string | null;
}
export declare const FlxFormError: {
    ({ id, className, children, error, ref, ...props }: FlxFormErrorProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react").JSX.Element | null;
    displayName: string;
};
export declare const MemoFlxFormError: import('../../../../../../../node_modules/react').MemoExoticComponent<{
    ({ id, className, children, error, ref, ...props }: FlxFormErrorProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react").JSX.Element | null;
    displayName: string;
}>;
declare const _default: {
    FlxFormError: {
        ({ id, className, children, error, ref, ...props }: FlxFormErrorProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react").JSX.Element | null;
        displayName: string;
    };
    MemoFlxFormError: import('../../../../../../../node_modules/react').MemoExoticComponent<{
        ({ id, className, children, error, ref, ...props }: FlxFormErrorProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react").JSX.Element | null;
        displayName: string;
    }>;
};
export default _default;
