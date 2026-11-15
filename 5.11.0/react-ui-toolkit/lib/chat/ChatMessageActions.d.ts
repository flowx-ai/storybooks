import { ComponentPropsWithRef } from '../../../../../../node_modules/react';
import { Tooltip } from '@base-ui/react/tooltip';
export interface ChatMessageActionsProps extends ComponentPropsWithRef<'div'> {
    /** Relative timestamp label (e.g. "10:44 PM", "Yesterday", "3d ago"). */
    timestampLabel?: string | null;
    /** Full localized timestamp shown in a tooltip when hovering the label. */
    timestampTooltip?: string | null;
    /** Shows the timestamp label. Default true. */
    showTimestamp?: boolean;
    /** Shows the copy button. Default true. */
    showCopyAction?: boolean;
    /** Text stored in the clipboard when the copy action is performed. */
    copyText?: string;
    /** Theme icon path for the copy button. */
    copyIconPath?: string | null;
    /** Theme icon path shown for 2s after a successful copy. */
    copySuccessIconPath?: string | null;
    /** Localized aria-label for the copy button. */
    copyAriaLabel?: string;
    /** Localized aria-label announced while the copy-success icon is shown. */
    copiedAriaLabel?: string;
    /** Theme className for the timestamp tooltip popup. */
    tooltipClassName?: string;
    /** Portal container for the timestamp tooltip. */
    tooltipContainer?: Tooltip.Portal.Props['container'];
    /** Keeps the actions visible without hovering (used for the last message). */
    alwaysVisible?: boolean;
    /** `data-testid` from the CHAT_MESSAGE_ACTIONS config. */
    dataTestId?: string | null;
}
declare const FlxChatMessageActions: {
    ({ timestampLabel, timestampTooltip, showTimestamp, showCopyAction, copyText, copyIconPath, copySuccessIconPath, copyAriaLabel, copiedAriaLabel, tooltipClassName, tooltipContainer, alwaysVisible, dataTestId, className, ref, ...props }: ChatMessageActionsProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react").JSX.Element | null;
    displayName: string;
};
declare const MemoFlxChatMessageActions: import('../../../../../../node_modules/react').MemoExoticComponent<{
    ({ timestampLabel, timestampTooltip, showTimestamp, showCopyAction, copyText, copyIconPath, copySuccessIconPath, copyAriaLabel, copiedAriaLabel, tooltipClassName, tooltipContainer, alwaysVisible, dataTestId, className, ref, ...props }: ChatMessageActionsProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react").JSX.Element | null;
    displayName: string;
}>;
export { MemoFlxChatMessageActions, FlxChatMessageActions };
declare const _default: {
    MemoFlxChatMessageActions: import('../../../../../../node_modules/react').MemoExoticComponent<{
        ({ timestampLabel, timestampTooltip, showTimestamp, showCopyAction, copyText, copyIconPath, copySuccessIconPath, copyAriaLabel, copiedAriaLabel, tooltipClassName, tooltipContainer, alwaysVisible, dataTestId, className, ref, ...props }: ChatMessageActionsProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react").JSX.Element | null;
        displayName: string;
    }>;
    FlxChatMessageActions: {
        ({ timestampLabel, timestampTooltip, showTimestamp, showCopyAction, copyText, copyIconPath, copySuccessIconPath, copyAriaLabel, copiedAriaLabel, tooltipClassName, tooltipContainer, alwaysVisible, dataTestId, className, ref, ...props }: ChatMessageActionsProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react").JSX.Element | null;
        displayName: string;
    };
};
export default _default;
