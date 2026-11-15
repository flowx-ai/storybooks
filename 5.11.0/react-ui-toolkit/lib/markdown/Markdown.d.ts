import { ComponentPropsWithoutRef, Ref } from '../../../../../../node_modules/react';
export interface FlxMarkdownProps extends ComponentPropsWithoutRef<'div'> {
    content?: string;
}
export declare const FlxMarkdown: {
    ({ content: effectiveContent, children, className, ref, ...props }: FlxMarkdownProps & {
        ref?: Ref<HTMLDivElement>;
    }): import("react").JSX.Element;
    displayName: string;
};
export declare const MemoFlxMarkdown: import('../../../../../../node_modules/react').MemoExoticComponent<{
    ({ content: effectiveContent, children, className, ref, ...props }: FlxMarkdownProps & {
        ref?: Ref<HTMLDivElement>;
    }): import("react").JSX.Element;
    displayName: string;
}>;
declare const _default: {
    FlxMarkdown: {
        ({ content: effectiveContent, children, className, ref, ...props }: FlxMarkdownProps & {
            ref?: Ref<HTMLDivElement>;
        }): import("react").JSX.Element;
        displayName: string;
    };
    MemoFlxMarkdown: import('../../../../../../node_modules/react').MemoExoticComponent<{
        ({ content: effectiveContent, children, className, ref, ...props }: FlxMarkdownProps & {
            ref?: Ref<HTMLDivElement>;
        }): import("react").JSX.Element;
        displayName: string;
    }>;
};
export default _default;
