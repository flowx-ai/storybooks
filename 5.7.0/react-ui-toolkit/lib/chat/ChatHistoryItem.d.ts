import { ComponentPropsWithRef } from '../../../../../../node_modules/react';
import { Tooltip } from '@base-ui-components/react/tooltip';
export interface ChatHistoryItemProps extends ComponentPropsWithRef<'button'> {
    sessionId: string;
    summary?: string;
    active?: boolean;
    createdAt?: string;
    tooltipClassName?: string;
    onSelectSession?: (sessionId: string) => void;
    locale?: string;
    /** Portal container for tooltips (ensures styling when rendered inside a portal boundary). */
    tooltipContainer?: Tooltip.Portal.Props['container'];
}
declare const FlxChatHistoryItem: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatHistoryItemProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
declare const MemoFlxChatHistoryItem: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatHistoryItemProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>>;
export { MemoFlxChatHistoryItem, FlxChatHistoryItem };
declare const _default: {
    MemoFlxChatHistoryItem: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatHistoryItemProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>>;
    FlxChatHistoryItem: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatHistoryItemProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
};
export default _default;
