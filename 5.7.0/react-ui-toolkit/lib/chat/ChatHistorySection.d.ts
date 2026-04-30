import { ComponentPropsWithRef, ReactNode } from '../../../../../../node_modules/react';
export interface ChatHistorySectionProps extends ComponentPropsWithRef<'div'> {
    /** Section title (e.g. "Today", "Yesterday"). */
    title: string;
    children?: ReactNode;
}
declare const FlxChatHistorySection: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatHistorySectionProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
declare const MemoFlxChatHistorySection: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatHistorySectionProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
export { MemoFlxChatHistorySection, FlxChatHistorySection };
declare const _default: {
    MemoFlxChatHistorySection: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatHistorySectionProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
    FlxChatHistorySection: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatHistorySectionProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
};
export default _default;
