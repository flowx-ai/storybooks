import { FC } from '../../../../../../node_modules/react';
import { ChatMessageFeedback } from '@flowx/core-sdk';
export interface ChatMessageFeedbackProps {
    /** Renders the form; the owner opens it when the negative thumb is clicked. */
    open: boolean;
    /** Localized modal title. */
    title?: string;
    /** Ordered reason options; when empty only the comment field is rendered. */
    reasons?: string[];
    /** Reason of an existing reaction — pre-selected while editing. */
    reason?: string | null;
    /** Comment of an existing reaction — pre-filled while editing. */
    comment?: string | null;
    /** Editing an existing negative reaction: adds the Remove Feedback action next to Cancel. */
    isEdit?: boolean;
    /** Localized placeholder of the comment field. */
    placeholder?: string;
    /** Localized error shown when the comment exceeds the character cap. */
    commentError?: string;
    cancelLabel?: string;
    submitLabel?: string;
    removeLabel?: string;
    /** Submits the reason/comment pair; both are optional. */
    onSubmit: (feedback: Omit<ChatMessageFeedback, 'value'>) => void;
    /** Closes the form without a request — the reaction stays neutral. */
    onCancel: () => void;
    /** Removes the existing reaction (edit mode only). */
    onRemove?: () => void;
    /** Theme className for the modal panel. */
    className?: string;
    /** Theme className for the modal header (title). */
    headerClassName?: string;
    /** Theme classNames for the feedback body (chatMessageFeedback + chatMessageFeedbackReason). */
    bodyClassName?: string;
    /** Theme className for the comment field — hosted on the textarea container (`& textarea` selectors). */
    textAreaClassName?: string;
    /** Theme className for the comment error — the modal renders outside any themed error scope. */
    errorClassName?: string;
    /** Theme className forwarded to the footer buttons. */
    buttonClassName?: string;
    /** Portal container, so the modal picks up the renderer's theme scope. */
    container?: HTMLElement;
}
declare const FlxChatMessageFeedback: FC<ChatMessageFeedbackProps>;
declare const MemoFlxChatMessageFeedback: import('../../../../../../node_modules/react').NamedExoticComponent<ChatMessageFeedbackProps>;
export { FlxChatMessageFeedback, MemoFlxChatMessageFeedback };
declare const _default: {
    FlxChatMessageFeedback: FC<ChatMessageFeedbackProps>;
    MemoFlxChatMessageFeedback: import('../../../../../../node_modules/react').NamedExoticComponent<ChatMessageFeedbackProps>;
};
export default _default;
