import { ComponentPropsWithRef, ReactNode } from '../../../../../../node_modules/react';
export interface ChatMessagesProps extends ComponentPropsWithRef<'div'> {
    children?: ReactNode;
    hasMoreMessages?: boolean;
    loadingMore?: boolean;
    onLoadMore?: () => void;
}
declare const FlxChatMessages: {
    ({ children, className, onScroll, hasMoreMessages, loadingMore, onLoadMore, ref, ...props }: ChatMessagesProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react").JSX.Element;
    displayName: string;
};
declare const MemoFlxChatMessages: import('../../../../../../node_modules/react').MemoExoticComponent<{
    ({ children, className, onScroll, hasMoreMessages, loadingMore, onLoadMore, ref, ...props }: ChatMessagesProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react").JSX.Element;
    displayName: string;
}>;
export { MemoFlxChatMessages, FlxChatMessages };
declare const _default: {
    MemoFlxChatMessages: import('../../../../../../node_modules/react').MemoExoticComponent<{
        ({ children, className, onScroll, hasMoreMessages, loadingMore, onLoadMore, ref, ...props }: ChatMessagesProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react").JSX.Element;
        displayName: string;
    }>;
    FlxChatMessages: {
        ({ children, className, onScroll, hasMoreMessages, loadingMore, onLoadMore, ref, ...props }: ChatMessagesProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react").JSX.Element;
        displayName: string;
    };
};
export default _default;
