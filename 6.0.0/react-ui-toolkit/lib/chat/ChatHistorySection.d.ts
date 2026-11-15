import { ComponentPropsWithRef, ReactNode } from '../../../../../../node_modules/react';
export interface ChatHistorySectionProps extends ComponentPropsWithRef<'div'> {
    /** Section title (e.g. "Today", "Yesterday"). */
    title: string;
    children?: ReactNode;
}
declare const FlxChatHistorySection: {
    ({ title, children, className, ref, ...props }: ChatHistorySectionProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import('../../../../../../node_modules/react').JSX.Element;
    displayName: string;
};
declare const MemoFlxChatHistorySection: import('../../../../../../node_modules/react').MemoExoticComponent<{
    ({ title, children, className, ref, ...props }: ChatHistorySectionProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import('../../../../../../node_modules/react').JSX.Element;
    displayName: string;
}>;
export { MemoFlxChatHistorySection, FlxChatHistorySection };
declare const _default: {
    MemoFlxChatHistorySection: import('../../../../../../node_modules/react').MemoExoticComponent<{
        ({ title, children, className, ref, ...props }: ChatHistorySectionProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import('../../../../../../node_modules/react').JSX.Element;
        displayName: string;
    }>;
    FlxChatHistorySection: {
        ({ title, children, className, ref, ...props }: ChatHistorySectionProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import('../../../../../../node_modules/react').JSX.Element;
        displayName: string;
    };
};
export default _default;
