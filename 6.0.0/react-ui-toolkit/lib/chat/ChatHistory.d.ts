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
    /** Controlled search input value. The search bar renders when onSearchChange is set. */
    searchValue?: string;
    /** Called on every search input change. */
    onSearchChange?: (value: string) => void;
    /** Called when the clear button resets the search input. */
    onSearchClear?: () => void;
    /** Placeholder for the search input; also used as its accessibility label. */
    searchPlaceholder?: string;
    /** Accessibility label for the clear button. */
    searchClearAriaLabel?: string;
    /** Resolved path of the leading search icon. */
    searchIconPath?: string | null;
    /** Resolved path of the clear icon. */
    searchClearIconPath?: string | null;
    /** Theme className applied to the search input element. */
    searchClassName?: string;
}
declare const FlxChatHistory: {
    ({ children, title, showSeparator, displayMode, buttonClassName, onBack, backAriaLabel, backIcon, onNewChat, newChatLabel, newChatIcon, onToggleFullscreen, isFullscreen, showFullscreenToggle, expandAriaLabel, collapseAriaLabel, expandIcon, collapseIcon, onClose, dockAriaLabel, dockIcon, emptyStateText, className, headerClassName, newChatTooltip, historyTooltip, expandTooltip, collapseTooltip, dockTooltip, backTooltip, tooltipClassName, tooltipContainer, onLoadMore, hasMore, loadingMore, searchValue, onSearchChange, onSearchClear, searchPlaceholder, searchClearAriaLabel, searchIconPath, searchClearIconPath, searchClassName, ref, ...props }: ChatHistoryProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import('../../../../../../node_modules/react').JSX.Element;
    displayName: string;
};
declare const MemoFlxChatHistory: import('../../../../../../node_modules/react').MemoExoticComponent<{
    ({ children, title, showSeparator, displayMode, buttonClassName, onBack, backAriaLabel, backIcon, onNewChat, newChatLabel, newChatIcon, onToggleFullscreen, isFullscreen, showFullscreenToggle, expandAriaLabel, collapseAriaLabel, expandIcon, collapseIcon, onClose, dockAriaLabel, dockIcon, emptyStateText, className, headerClassName, newChatTooltip, historyTooltip, expandTooltip, collapseTooltip, dockTooltip, backTooltip, tooltipClassName, tooltipContainer, onLoadMore, hasMore, loadingMore, searchValue, onSearchChange, onSearchClear, searchPlaceholder, searchClearAriaLabel, searchIconPath, searchClearIconPath, searchClassName, ref, ...props }: ChatHistoryProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import('../../../../../../node_modules/react').JSX.Element;
    displayName: string;
}>;
export { MemoFlxChatHistory, FlxChatHistory };
declare const _default: {
    MemoFlxChatHistory: import('../../../../../../node_modules/react').MemoExoticComponent<{
        ({ children, title, showSeparator, displayMode, buttonClassName, onBack, backAriaLabel, backIcon, onNewChat, newChatLabel, newChatIcon, onToggleFullscreen, isFullscreen, showFullscreenToggle, expandAriaLabel, collapseAriaLabel, expandIcon, collapseIcon, onClose, dockAriaLabel, dockIcon, emptyStateText, className, headerClassName, newChatTooltip, historyTooltip, expandTooltip, collapseTooltip, dockTooltip, backTooltip, tooltipClassName, tooltipContainer, onLoadMore, hasMore, loadingMore, searchValue, onSearchChange, onSearchClear, searchPlaceholder, searchClearAriaLabel, searchIconPath, searchClearIconPath, searchClassName, ref, ...props }: ChatHistoryProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import('../../../../../../node_modules/react').JSX.Element;
        displayName: string;
    }>;
    FlxChatHistory: {
        ({ children, title, showSeparator, displayMode, buttonClassName, onBack, backAriaLabel, backIcon, onNewChat, newChatLabel, newChatIcon, onToggleFullscreen, isFullscreen, showFullscreenToggle, expandAriaLabel, collapseAriaLabel, expandIcon, collapseIcon, onClose, dockAriaLabel, dockIcon, emptyStateText, className, headerClassName, newChatTooltip, historyTooltip, expandTooltip, collapseTooltip, dockTooltip, backTooltip, tooltipClassName, tooltipContainer, onLoadMore, hasMore, loadingMore, searchValue, onSearchChange, onSearchClear, searchPlaceholder, searchClearAriaLabel, searchIconPath, searchClearIconPath, searchClassName, ref, ...props }: ChatHistoryProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import('../../../../../../node_modules/react').JSX.Element;
        displayName: string;
    };
};
export default _default;
