import { ComponentPropsWithRef } from '../../../../../../node_modules/react';
export interface ChatHistoryItemProps extends ComponentPropsWithRef<'button'> {
    sessionId: string;
    summary?: string;
    active?: boolean;
    createdAt?: string;
    tooltipClassName?: string;
    onSelectSession?: (sessionId: string) => void;
    locale?: string;
}
declare const FlxChatHistoryItem: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatHistoryItemProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
declare const MemoFlxChatHistoryItem: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatHistoryItemProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>>;
export { MemoFlxChatHistoryItem, FlxChatHistoryItem };
declare const _default: {
    MemoFlxChatHistoryItem: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatHistoryItemProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>>;
    FlxChatHistoryItem: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatHistoryItemProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
};
export default _default;
