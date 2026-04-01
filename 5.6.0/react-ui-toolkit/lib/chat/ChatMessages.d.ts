import { ComponentPropsWithRef, ReactNode } from '../../../../../../node_modules/react';
export interface ChatMessagesProps extends ComponentPropsWithRef<'div'> {
    children?: ReactNode;
}
declare const FlxChatMessages: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatMessagesProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
declare const MemoFlxChatMessages: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatMessagesProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
export { MemoFlxChatMessages, FlxChatMessages };
declare const _default: {
    MemoFlxChatMessages: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatMessagesProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
    FlxChatMessages: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatMessagesProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
};
export default _default;
