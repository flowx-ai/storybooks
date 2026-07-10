import { ComponentPropsWithRef } from '../../../../../../node_modules/react';
import { AttachmentsLabels, ChatMessage, ChatMessageFile } from './Chat.dictionary';
import { FlxIconName } from '../icon/icon_set';
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
     * Icon path shown instead of the agent avatar when `message.hasError` is true.
     * Resolved from the theme's `errorIcon` key on `ChatErrorMessage` component.
     */
    errorIcon?: string | null;
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
    /** Fetches audio blob on demand (lazy loading). When provided, audio is not fetched until play. */
    fetchAudio?: (url: string) => Promise<Blob | null>;
    onAudioFetched?: (blobUrl: string) => void;
    onAudioError?: (error: unknown) => void;
    /** Theme icon path for the voice message play button. */
    voicePlayIconPath?: string | null;
    /** Theme icon path for the voice message pause button. */
    voicePauseIconPath?: string | null;
    /** Theme icon path for the voice message retry button (error state). */
    voiceRetryIconPath?: string | null;
    /** Localized text for "Voice message is being sent..". */
    voiceSendingLabel?: string;
    /** Localized text for "There was an error sending the message". */
    voiceErrorLabel?: string;
    /** Localized aria-label for the retry button. */
    voiceRetryAriaLabel?: string;
    /** Localized "Voice Message" label for the audio player. */
    voiceMessageLabel?: string;
    /** Localized aria-label for the audio player play button. */
    voicePlayAriaLabel?: string;
    /** Localized aria-label for the audio player pause button. */
    voicePauseAriaLabel?: string;
    /** Localized aria-label for the playback progress bar. */
    voiceProgressAriaLabel?: string;
    /** Theme icon path for the per-file download button (sender attachments). */
    downloadIconPath?: string;
    /** Icon name for the download button when no `downloadIconPath` is provided. */
    downloadIconName?: FlxIconName;
    /** Downloads an attached file (wrapper resolves the blob + triggers the browser save). */
    downloadFile?: (file: ChatMessageFile) => void | Promise<void>;
    /** Localized aria-labels for the attach/remove/download affordances. */
    attachmentsLabels?: AttachmentsLabels;
    /** `data-testid` for the attachments container (from the CHAT_USER_ATTACHED_FILES config). */
    userAttachedFilesDataTestId?: string;
    /** `data-testid` applied to each attached-file chip (from the CHAT_USER_FILE_ITEM config). */
    userFileItemDataTestId?: string;
}
declare const FlxChatMessage: {
    ({ message, avatar, chatAvatar, errorIcon, errorMessage, regenerateLabel, onRegenerate, buttonClassName, className, fetchAudio, onAudioFetched, onAudioError, voicePlayIconPath, voicePauseIconPath, voiceRetryIconPath, voiceSendingLabel, voiceErrorLabel, voiceRetryAriaLabel, voiceMessageLabel, voicePlayAriaLabel, voicePauseAriaLabel, voiceProgressAriaLabel, downloadIconPath, downloadIconName, downloadFile, attachmentsLabels, userAttachedFilesDataTestId, userFileItemDataTestId, ref, ...props }: ChatMessageProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const MemoFlxChatMessage: import('../../../../../../node_modules/react').MemoExoticComponent<{
    ({ message, avatar, chatAvatar, errorIcon, errorMessage, regenerateLabel, onRegenerate, buttonClassName, className, fetchAudio, onAudioFetched, onAudioError, voicePlayIconPath, voicePauseIconPath, voiceRetryIconPath, voiceSendingLabel, voiceErrorLabel, voiceRetryAriaLabel, voiceMessageLabel, voicePlayAriaLabel, voicePauseAriaLabel, voiceProgressAriaLabel, downloadIconPath, downloadIconName, downloadFile, attachmentsLabels, userAttachedFilesDataTestId, userFileItemDataTestId, ref, ...props }: ChatMessageProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}>;
export { MemoFlxChatMessage, FlxChatMessage };
declare const _default: {
    MemoFlxChatMessage: import('../../../../../../node_modules/react').MemoExoticComponent<{
        ({ message, avatar, chatAvatar, errorIcon, errorMessage, regenerateLabel, onRegenerate, buttonClassName, className, fetchAudio, onAudioFetched, onAudioError, voicePlayIconPath, voicePauseIconPath, voiceRetryIconPath, voiceSendingLabel, voiceErrorLabel, voiceRetryAriaLabel, voiceMessageLabel, voicePlayAriaLabel, voicePauseAriaLabel, voiceProgressAriaLabel, downloadIconPath, downloadIconName, downloadFile, attachmentsLabels, userAttachedFilesDataTestId, userFileItemDataTestId, ref, ...props }: ChatMessageProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    }>;
    FlxChatMessage: {
        ({ message, avatar, chatAvatar, errorIcon, errorMessage, regenerateLabel, onRegenerate, buttonClassName, className, fetchAudio, onAudioFetched, onAudioError, voicePlayIconPath, voicePauseIconPath, voiceRetryIconPath, voiceSendingLabel, voiceErrorLabel, voiceRetryAriaLabel, voiceMessageLabel, voicePlayAriaLabel, voicePauseAriaLabel, voiceProgressAriaLabel, downloadIconPath, downloadIconName, downloadFile, attachmentsLabels, userAttachedFilesDataTestId, userFileItemDataTestId, ref, ...props }: ChatMessageProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export default _default;
