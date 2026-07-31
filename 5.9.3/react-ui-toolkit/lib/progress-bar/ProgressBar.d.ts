import { ComponentPropsWithoutRef, Ref } from '../../../../../../node_modules/react';
export interface FlxProgressBarProps extends ComponentPropsWithoutRef<'div'> {
    progress?: number;
}
export declare const FlxProgressBar: {
    ({ progress, className, ref, ...props }: FlxProgressBarProps & {
        ref?: Ref<HTMLDivElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const MemoFlxProgressBar: import('../../../../../../node_modules/react').MemoExoticComponent<{
    ({ progress, className, ref, ...props }: FlxProgressBarProps & {
        ref?: Ref<HTMLDivElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}>;
declare const _default: {
    FlxProgressBar: {
        ({ progress, className, ref, ...props }: FlxProgressBarProps & {
            ref?: Ref<HTMLDivElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    MemoFlxProgressBar: import('../../../../../../node_modules/react').MemoExoticComponent<{
        ({ progress, className, ref, ...props }: FlxProgressBarProps & {
            ref?: Ref<HTMLDivElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    }>;
};
export default _default;
