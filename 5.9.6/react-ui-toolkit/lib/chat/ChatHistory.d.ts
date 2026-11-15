import { ComponentPropsWithRef, ReactNode } from '../../../../../../node_modules/react';
import { ChatHeaderProps } from './ChatHeader';
/** Header props that ChatHistory does not forward. */
type OmittedHeaderProps = 'chatAvatar' | 'showAvatar' | 'subtitle' | 'onHistory' | 'historyAriaLabel' | 'historyIcon';
type ForwardedHeaderProps = Omit<ChatHeaderProps, OmittedHeaderProps | keyof ComponentPropsWithRef<'div'>>;
export interface ChatHistoryProps extends ComponentPropsWithRef<'div'>, ForwardedHeaderProps {
    children?: ReactNode;
    /** Title displayed in the header. Default: "Conversation History". */
    title?: string;
    emptyStateText?: string;
    /** className applied to the inner FlxChatHeader element. */
    headerClassName?: string;
    /** Called when the user scrolls near the bottom. */
    onLoadMore?: () => void;
    /** Whether more items can be loaded. */
    hasMore?: boolean;
    /** Whether items are currently being loaded. */
    loadingMore?: boolean;
}
declare const FlxChatHistory: {
    ({ children, title, showSeparator, displayMode, buttonClassName, onBack, backAriaLabel, backIcon, onNewChat, newChatLabel, newChatIcon, onToggleFullscreen, isFullscreen, showFullscreenToggle, expandAriaLabel, collapseAriaLabel, expandIcon, collapseIcon, onClose, dockAriaLabel, dockIcon, emptyStateText, className, headerClassName, newChatTooltip, historyTooltip, expandTooltip, collapseTooltip, dockTooltip, backTooltip, tooltipClassName, tooltipContainer, onLoadMore, hasMore, loadingMore, ref, ...props }: ChatHistoryProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react").JSX.Element;
    displayName: string;
};
declare const MemoFlxChatHistory: import('../../../../../../node_modules/react').MemoExoticComponent<{
    ({ children, title, showSeparator, displayMode, buttonClassName, onBack, backAriaLabel, backIcon, onNewChat, newChatLabel, newChatIcon, onToggleFullscreen, isFullscreen, showFullscreenToggle, expandAriaLabel, collapseAriaLabel, expandIcon, collapseIcon, onClose, dockAriaLabel, dockIcon, emptyStateText, className, headerClassName, newChatTooltip, historyTooltip, expandTooltip, collapseTooltip, dockTooltip, backTooltip, tooltipClassName, tooltipContainer, onLoadMore, hasMore, loadingMore, ref, ...props }: ChatHistoryProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react").JSX.Element;
    displayName: string;
}>;
export { MemoFlxChatHistory, FlxChatHistory };
declare const _default: {
    MemoFlxChatHistory: import('../../../../../../node_modules/react').MemoExoticComponent<{
        ({ children, title, showSeparator, displayMode, buttonClassName, onBack, backAriaLabel, backIcon, onNewChat, newChatLabel, newChatIcon, onToggleFullscreen, isFullscreen, showFullscreenToggle, expandAriaLabel, collapseAriaLabel, expandIcon, collapseIcon, onClose, dockAriaLabel, dockIcon, emptyStateText, className, headerClassName, newChatTooltip, historyTooltip, expandTooltip, collapseTooltip, dockTooltip, backTooltip, tooltipClassName, tooltipContainer, onLoadMore, hasMore, loadingMore, ref, ...props }: ChatHistoryProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react").JSX.Element;
        displayName: string;
    }>;
    FlxChatHistory: {
        ({ children, title, showSeparator, displayMode, buttonClassName, onBack, backAriaLabel, backIcon, onNewChat, newChatLabel, newChatIcon, onToggleFullscreen, isFullscreen, showFullscreenToggle, expandAriaLabel, collapseAriaLabel, expandIcon, collapseIcon, onClose, dockAriaLabel, dockIcon, emptyStateText, className, headerClassName, newChatTooltip, historyTooltip, expandTooltip, collapseTooltip, dockTooltip, backTooltip, tooltipClassName, tooltipContainer, onLoadMore, hasMore, loadingMore, ref, ...props }: ChatHistoryProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react").JSX.Element;
        displayName: string;
    };
};
export default _default;
