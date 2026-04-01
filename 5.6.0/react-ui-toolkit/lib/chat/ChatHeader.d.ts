import { ComponentPropsWithRef } from '../../../../../../node_modules/react';
import { FlxIconName } from '../icon/icon_set';
/** Display mode determines which header actions are shown and in what order. */
export type ChatHeaderDisplayMode = 'fill' | 'floating' | 'fullscreen';
/** Icon override: path (URL) takes precedence over name (built-in icon set). */
export type ChatHeaderIconProp = {
    path?: string | null;
    name?: FlxIconName;
} | string | null;
export interface ChatHeaderProps extends ComponentPropsWithRef<'div'> {
    chatAvatar?: {
        src: string;
        alt: string;
    };
    /** When false, avatar is hidden (e.g. on floating chat). Default true when chatAvatar is set. */
    showAvatar?: boolean;
    title?: string;
    subtitle?: string;
    showSeparator?: boolean;
    /** Display mode: floating = new chat + expand + dock; fullscreen = expand + new chat; fill = new chat only. */
    displayMode?: ChatHeaderDisplayMode;
    buttonClassName?: string;
    /** Aria-label for the new chat button. */
    newChatLabel?: string;
    onNewChat?: () => void;
    /** When set, shows the history button near the new chat button. */
    onHistory?: () => void;
    /** Aria-label for the history button. */
    historyAriaLabel?: string;
    /** History button icon. Default name: retry. */
    historyIcon?: ChatHeaderIconProp;
    /** When set, shows a back button to the left of the title. */
    onBack?: () => void;
    /** Aria-label for the back button. */
    backAriaLabel?: string;
    /** Back button icon. Default name: arrowLeft. */
    backIcon?: ChatHeaderIconProp;
    /** When set, shows expand/collapse button. */
    onToggleFullscreen?: () => void;
    isFullscreen?: boolean;
    showFullscreenToggle?: boolean;
    /** Aria-label for the expand chat button. */
    expandAriaLabel?: string;
    /** Aria-label for the collapse chat button. */
    collapseAriaLabel?: string;
    /** When set, shows dock/close button (floating mode). */
    onClose?: () => void;
    /** Aria-label for the dock/close chat button. */
    dockAriaLabel?: string;
    /** New chat button icon (path URL or { path, name }). Default name: edit. */
    newChatIcon?: ChatHeaderIconProp;
    /** Expand button icon. Default name: arrowUp. */
    expandIcon?: ChatHeaderIconProp;
    /** Collapse button icon (when fullscreen). Default name: caretDown. */
    collapseIcon?: ChatHeaderIconProp;
    /** Dock/close button icon. Default name: close. */
    dockIcon?: ChatHeaderIconProp;
    /** Tooltip text for the new chat button. When set, wraps the button in a tooltip. */
    newChatTooltip?: string;
    /** Tooltip text for the history button. */
    historyTooltip?: string;
    /** Tooltip text for the expand/collapse button. */
    expandTooltip?: string;
    /** Tooltip text for the collapse button (when fullscreen). Falls back to expandTooltip if not set. */
    collapseTooltip?: string;
    /** Tooltip text for the dock/close button. */
    dockTooltip?: string;
    /** Tooltip text for the back button. */
    backTooltip?: string;
    /** CSS class applied to header button tooltip popups (for theming). */
    tooltipClassName?: string;
}
declare const FlxChatHeader: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatHeaderProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
declare const MemoFlxChatHeader: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatHeaderProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
export { MemoFlxChatHeader, FlxChatHeader };
declare const _default: {
    MemoFlxChatHeader: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatHeaderProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
    FlxChatHeader: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatHeaderProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
};
export default _default;
