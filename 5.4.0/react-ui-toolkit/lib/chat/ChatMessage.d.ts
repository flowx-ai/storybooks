import { ComponentPropsWithRef } from '../../../../../../node_modules/react';
import { ChatMessage } from './Chat.dictionary';
export type ChatAvatar = {
    src: string;
    alt: string;
};
export interface ChatMessageProps extends ComponentPropsWithRef<'div'> {
    message: ChatMessage;
    /**
     * Legacy avatar prop kept for backwards compatibility.
     * Prefer `chatAvatar` to match the Angular API.
     */
    avatar?: {
        src: string;
        alt: string;
    };
    /**
     * Chat avatar object (src/alt). Prefer this over the legacy `avatar` prop.
     */
    chatAvatar?: ChatAvatar;
    /**
     * When `message.hasError` is true, this replaces the message content.
     */
    errorMessage?: string | null;
    /**
     * Label for the "regenerate" action shown when `message.hasError` is true.
     */
    regenerateLabel?: string;
    /**
     * Called when the user clicks "regenerate" while the message is in error state.
     */
    onRegenerate?: (message: ChatMessage) => void;
    /**
     * Optional className forwarded to the regenerate button (mirrors `ChatInput` API).
     */
    buttonClassName?: string;
    className?: string;
}
declare const FlxChatMessage: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatMessageProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
declare const MemoFlxChatMessage: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatMessageProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
export { MemoFlxChatMessage, FlxChatMessage };
declare const _default: {
    MemoFlxChatMessage: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatMessageProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
    FlxChatMessage: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatMessageProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
};
export default _default;
