import { ComponentPropsWithRef } from '../../../../../../node_modules/react';
import { AttachmentsLabels, ChatMessageFile } from './Chat.dictionary';
import { FlxIconName } from '../icon/icon_set';
export interface ChatUserAttachedFilesProps extends ComponentPropsWithRef<'div'> {
    /** Files attached to the user message. */
    files: ChatMessageFile[];
    /** Theme icon path for the per-file download button. */
    downloadIconPath?: string;
    /** Icon name for the download button when no `downloadIconPath` is provided. */
    downloadIconName?: FlxIconName;
    /** Downloads an attached file (wrapper resolves the blob + triggers the browser save). */
    downloadFile?: (file: ChatMessageFile) => void | Promise<void>;
    /** Localized aria-labels for the download affordance. */
    attachmentsLabels?: AttachmentsLabels;
    className?: string;
    /** `data-testid` for the container (from the CHAT_USER_ATTACHED_FILES config). */
    userAttachedFilesDataTestId?: string;
    /** `data-testid` applied to each file chip (from the CHAT_USER_FILE_ITEM config). */
    userFileItemDataTestId?: string;
}
/**
 * Renders a user's attached files block, meant to be nested inside a
 * `.flx-chat-message` element (above the user message bubble).
 */
declare const FlxChatUserAttachedFiles: {
    ({ files, downloadIconPath, downloadIconName, downloadFile, attachmentsLabels, className, userAttachedFilesDataTestId, userFileItemDataTestId, ref, ...props }: ChatUserAttachedFilesProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import('../../../../../../node_modules/react').JSX.Element;
    displayName: string;
};
declare const MemoFlxChatUserAttachedFiles: import('../../../../../../node_modules/react').MemoExoticComponent<{
    ({ files, downloadIconPath, downloadIconName, downloadFile, attachmentsLabels, className, userAttachedFilesDataTestId, userFileItemDataTestId, ref, ...props }: ChatUserAttachedFilesProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import('../../../../../../node_modules/react').JSX.Element;
    displayName: string;
}>;
export { MemoFlxChatUserAttachedFiles, FlxChatUserAttachedFiles };
declare const _default: {
    MemoFlxChatUserAttachedFiles: import('../../../../../../node_modules/react').MemoExoticComponent<{
        ({ files, downloadIconPath, downloadIconName, downloadFile, attachmentsLabels, className, userAttachedFilesDataTestId, userFileItemDataTestId, ref, ...props }: ChatUserAttachedFilesProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import('../../../../../../node_modules/react').JSX.Element;
        displayName: string;
    }>;
    FlxChatUserAttachedFiles: {
        ({ files, downloadIconPath, downloadIconName, downloadFile, attachmentsLabels, className, userAttachedFilesDataTestId, userFileItemDataTestId, ref, ...props }: ChatUserAttachedFilesProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import('../../../../../../node_modules/react').JSX.Element;
        displayName: string;
    };
};
export default _default;
