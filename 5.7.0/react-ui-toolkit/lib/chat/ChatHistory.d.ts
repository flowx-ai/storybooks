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
declare const FlxChatHistory: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatHistoryProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
declare const MemoFlxChatHistory: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatHistoryProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
export { MemoFlxChatHistory, FlxChatHistory };
declare const _default: {
    MemoFlxChatHistory: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatHistoryProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
    FlxChatHistory: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatHistoryProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
};
export default _default;
