import { ComponentPropsWithRef } from '../../../../../../node_modules/react';
import { Tooltip } from '@base-ui/react/tooltip';
import { FlxIconName } from '../icon/icon_set';
import { AttachmentsLabels, ChatAttachmentEntry } from './Chat.dictionary';
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
    /** When true, the chat is read-only: input/send disabled, voice/attach hidden, tooltip on hover. */
    inputDisabled?: boolean;
    /** Tooltip shown on hover over the input row while disabled (web). */
    inputDisabledTooltip?: string;
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
    /** Master switch for the file-upload affordances (paperclip button + drag/drop). */
    showFileUpload?: boolean;
    /** Accept filter passed to the native file input (and used for client-side validation). */
    accept?: string;
    /** Maximum number of attached files; exceeding it surfaces `filesExceededError`. */
    maxFiles?: number;
    /** Maximum combined size (bytes) of attached files; exceeding it surfaces `filesSizeExceededError`. */
    maxFilesSize?: number;
    /** Per-chip error text shown when a file fails the `accept` validation. */
    invalidFileTypeError?: string;
    /** Global error text shown when the file count limit is exceeded. */
    filesExceededError?: string;
    /** Global error text shown when the total size limit is exceeded. */
    filesSizeExceededError?: string;
    /**
     * Server-side upload error (case 3) — wrapper-controlled; keeps send enabled for retry.
     * Drives retry detection only; the message itself is surfaced via toast by the wrapper,
     * not in the attachments area.
     */
    uploadError?: string | null;
    /** Theme icon path for the attach (paperclip) button. */
    attachIconPath?: string;
    /** Icon name for the attach button when no `attachIconPath` is provided. */
    attachIconName?: FlxIconName;
    /** Theme icon path for the per-chip remove button. */
    deleteIconPath?: string;
    /** Icon name for the remove button when no `deleteIconPath` is provided. */
    deleteIconName?: FlxIconName;
    /** Localized aria-labels for the attach/remove/download affordances. */
    attachmentsLabels?: AttachmentsLabels;
    /** Controlled list of attached files (React equivalent of Angular's two-way `model()`). */
    attachments?: ChatAttachmentEntry[];
    /** Called whenever the attachment list changes (add via picker/drop, remove). */
    onAttachmentsChange?: (attachments: ChatAttachmentEntry[]) => void;
    /** Emitted on send when attachments are present; the wrapper uploads + clears them. */
    onAttachmentsMessage?: (payload: {
        message: string;
        files: File[];
    }) => void;
    /** `data-testid` for the attachments list container (from the CHAT_FILE_ATTACHMENTS config). */
    attachmentsDataTestId?: string;
    /** `data-testid` applied to each file chip (from the CHAT_FILE_ITEM config). */
    fileItemDataTestId?: string;
}
declare const FlxChatInput: {
    ({ inputPlaceholder, sendAriaLabel, sendTooltip, stopAriaLabel, stopTooltip, tooltipClassName, voiceMicAriaLabel, sendMessage, messageInput, className, buttonClassName, maxInputRows, sendIconPath, sendIconName, voiceMicIconPath, voiceMicIconName, textAreaClassName, sendDisabled, inputDisabled, inputDisabledTooltip, onStopResponse, stopIconPath, stopIconName, onVoiceMessage, showVoiceInput, voiceCancelIconPath, voiceConfirmIconPath, voiceDeleteIconPath, voicePlayIconPath, voicePauseIconPath, voiceListeningLabel, voiceMessageLabel, voiceCancelAriaLabel, voiceConfirmAriaLabel, voiceDeleteAriaLabel, voicePlayAriaLabel, voicePauseAriaLabel, voiceProgressAriaLabel, tooltipContainer, showFileUpload, accept, maxFiles, maxFilesSize, invalidFileTypeError, filesExceededError, filesSizeExceededError, uploadError, attachIconPath, attachIconName, deleteIconPath, deleteIconName, attachmentsLabels, attachments, onAttachmentsChange, onAttachmentsMessage, attachmentsDataTestId, fileItemDataTestId, ref, ...props }: ChatInputProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react").JSX.Element;
    displayName: string;
};
declare const MemoFlxChatInput: import('../../../../../../node_modules/react').MemoExoticComponent<{
    ({ inputPlaceholder, sendAriaLabel, sendTooltip, stopAriaLabel, stopTooltip, tooltipClassName, voiceMicAriaLabel, sendMessage, messageInput, className, buttonClassName, maxInputRows, sendIconPath, sendIconName, voiceMicIconPath, voiceMicIconName, textAreaClassName, sendDisabled, inputDisabled, inputDisabledTooltip, onStopResponse, stopIconPath, stopIconName, onVoiceMessage, showVoiceInput, voiceCancelIconPath, voiceConfirmIconPath, voiceDeleteIconPath, voicePlayIconPath, voicePauseIconPath, voiceListeningLabel, voiceMessageLabel, voiceCancelAriaLabel, voiceConfirmAriaLabel, voiceDeleteAriaLabel, voicePlayAriaLabel, voicePauseAriaLabel, voiceProgressAriaLabel, tooltipContainer, showFileUpload, accept, maxFiles, maxFilesSize, invalidFileTypeError, filesExceededError, filesSizeExceededError, uploadError, attachIconPath, attachIconName, deleteIconPath, deleteIconName, attachmentsLabels, attachments, onAttachmentsChange, onAttachmentsMessage, attachmentsDataTestId, fileItemDataTestId, ref, ...props }: ChatInputProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react").JSX.Element;
    displayName: string;
}>;
export { MemoFlxChatInput, FlxChatInput };
declare const _default: {
    MemoFlxChatInput: import('../../../../../../node_modules/react').MemoExoticComponent<{
        ({ inputPlaceholder, sendAriaLabel, sendTooltip, stopAriaLabel, stopTooltip, tooltipClassName, voiceMicAriaLabel, sendMessage, messageInput, className, buttonClassName, maxInputRows, sendIconPath, sendIconName, voiceMicIconPath, voiceMicIconName, textAreaClassName, sendDisabled, inputDisabled, inputDisabledTooltip, onStopResponse, stopIconPath, stopIconName, onVoiceMessage, showVoiceInput, voiceCancelIconPath, voiceConfirmIconPath, voiceDeleteIconPath, voicePlayIconPath, voicePauseIconPath, voiceListeningLabel, voiceMessageLabel, voiceCancelAriaLabel, voiceConfirmAriaLabel, voiceDeleteAriaLabel, voicePlayAriaLabel, voicePauseAriaLabel, voiceProgressAriaLabel, tooltipContainer, showFileUpload, accept, maxFiles, maxFilesSize, invalidFileTypeError, filesExceededError, filesSizeExceededError, uploadError, attachIconPath, attachIconName, deleteIconPath, deleteIconName, attachmentsLabels, attachments, onAttachmentsChange, onAttachmentsMessage, attachmentsDataTestId, fileItemDataTestId, ref, ...props }: ChatInputProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react").JSX.Element;
        displayName: string;
    }>;
    FlxChatInput: {
        ({ inputPlaceholder, sendAriaLabel, sendTooltip, stopAriaLabel, stopTooltip, tooltipClassName, voiceMicAriaLabel, sendMessage, messageInput, className, buttonClassName, maxInputRows, sendIconPath, sendIconName, voiceMicIconPath, voiceMicIconName, textAreaClassName, sendDisabled, inputDisabled, inputDisabledTooltip, onStopResponse, stopIconPath, stopIconName, onVoiceMessage, showVoiceInput, voiceCancelIconPath, voiceConfirmIconPath, voiceDeleteIconPath, voicePlayIconPath, voicePauseIconPath, voiceListeningLabel, voiceMessageLabel, voiceCancelAriaLabel, voiceConfirmAriaLabel, voiceDeleteAriaLabel, voicePlayAriaLabel, voicePauseAriaLabel, voiceProgressAriaLabel, tooltipContainer, showFileUpload, accept, maxFiles, maxFilesSize, invalidFileTypeError, filesExceededError, filesSizeExceededError, uploadError, attachIconPath, attachIconName, deleteIconPath, deleteIconName, attachmentsLabels, attachments, onAttachmentsChange, onAttachmentsMessage, attachmentsDataTestId, fileItemDataTestId, ref, ...props }: ChatInputProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react").JSX.Element;
        displayName: string;
    };
};
export default _default;
