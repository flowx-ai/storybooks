import { ComponentPropsWithRef } from '../../../../../../node_modules/react';
export interface ChatHeaderProps extends ComponentPropsWithRef<'div'> {
    chatAvatar?: {
        src: string;
        alt: string;
    };
    title?: string;
    subtitle?: string;
    showSeparator?: boolean;
    buttonClassName?: string;
    newChatLabel?: string;
    onNewChat?: () => void;
}
declare const FlxChatHeader: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatHeaderProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
declare const MemoFlxChatHeader: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatHeaderProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
export { MemoFlxChatHeader, FlxChatHeader };
declare const _default: {
    MemoFlxChatHeader: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatHeaderProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
    FlxChatHeader: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatHeaderProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
};
export default _default;
