import { ComponentPropsWithRef } from '../../../../../../node_modules/react';
import { FlxIconName } from '../icon/icon_set';
export interface ChatInputProps extends ComponentPropsWithRef<'div'> {
    inputPlaceholder?: string;
    sendAriaLabel?: string;
    sendMessage: (message: string) => void;
    messageInput: string;
    buttonClassName?: string;
    textAreaClassName?: string;
    /**
     * Max number of rows in the textarea (parity with Angular wrapper `maxInputRows`).
     */
    maxInputRows?: number;
    /**
     * Optional SVG path (static asset URL) for the send icon.
     */
    sendIconPath?: string;
    /**
     * Optional fallback icon name when `sendIconPath` is not provided or fails to load.
     */
    sendIconName?: FlxIconName;
    sendDisabled?: boolean;
}
declare const FlxChatInput: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatInputProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
declare const MemoFlxChatInput: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatInputProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
export { MemoFlxChatInput, FlxChatInput };
declare const _default: {
    MemoFlxChatInput: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatInputProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
    FlxChatInput: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatInputProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
};
export default _default;
