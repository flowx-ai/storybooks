import { ComponentPropsWithRef } from '../../../../../../node_modules/react';
import { Tooltip } from '@base-ui-components/react/tooltip';
import { FlxIconName } from '../icon/icon_set';
export interface ChatInputProps extends ComponentPropsWithRef<'div'> {
    inputPlaceholder?: string;
    sendAriaLabel?: string;
    sendTooltip?: string;
    stopAriaLabel?: string;
    stopTooltip?: string;
    tooltipClassName?: string;
    voiceMicAriaLabel?: string;
    sendMessage: (message: string) => void;
    messageInput: string;
    buttonClassName?: string;
    textAreaClassName?: string;
    maxInputRows?: number;
    sendIconPath?: string;
    sendIconName?: FlxIconName;
    voiceMicIconPath?: string;
    voiceMicIconName?: FlxIconName;
    sendDisabled?: boolean;
    onStopResponse?: () => void;
    stopIconPath?: string;
    stopIconName?: FlxIconName;
    onVoiceMessage?: (audioBlob: Blob, duration: number) => void;
    showVoiceInput?: boolean;
    /** Theme icon path for cancel button (recording state). */
    voiceCancelIconPath?: string | null;
    /** Theme icon path for confirm/accept button (recording state). */
    voiceConfirmIconPath?: string | null;
    /** Theme icon path for delete/discard button (recorded/playing state). */
    voiceDeleteIconPath?: string | null;
    /** Theme icon path for play button (recorded state). */
    voicePlayIconPath?: string | null;
    /** Theme icon path for pause button (playing state). */
    voicePauseIconPath?: string | null;
    /** Localized label for the "Listening" text. */
    voiceListeningLabel?: string;
    /** Localized label for the "Voice Message" text in recorded state. */
    voiceMessageLabel?: string;
    /** Localized aria-label for cancel button. */
    voiceCancelAriaLabel?: string;
    /** Localized aria-label for confirm/accept button. */
    voiceConfirmAriaLabel?: string;
    /** Localized aria-label for delete/discard button. */
    voiceDeleteAriaLabel?: string;
    /** Localized aria-label for play button. */
    voicePlayAriaLabel?: string;
    /** Localized aria-label for pause button. */
    voicePauseAriaLabel?: string;
    /** Localized aria-label for the playback progress bar. */
    voiceProgressAriaLabel?: string;
    /** Portal container for tooltips (ensures styling when rendered inside a portal boundary). */
    tooltipContainer?: Tooltip.Portal.Props['container'];
}
declare const FlxChatInput: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatInputProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
declare const MemoFlxChatInput: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatInputProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
export { MemoFlxChatInput, FlxChatInput };
declare const _default: {
    MemoFlxChatInput: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatInputProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
    FlxChatInput: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatInputProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
};
export default _default;
