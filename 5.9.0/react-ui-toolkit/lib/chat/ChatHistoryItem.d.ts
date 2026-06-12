import { ComponentPropsWithRef } from '../../../../../../node_modules/react';
import { Tooltip } from '@base-ui/react/tooltip';
export interface ChatHistoryItemProps extends ComponentPropsWithRef<'button'> {
    sessionId: string;
    summary?: string;
    active?: boolean;
    createdAt?: string;
    tooltipClassName?: string;
    onSelectSession?: (sessionId: string) => void;
    locale?: string;
    /** Portal container for tooltips (ensures styling when rendered inside a portal boundary). */
    tooltipContainer?: Tooltip.Portal.Props['container'];
}
declare const FlxChatHistoryItem: {
    ({ sessionId, summary, active, createdAt, tooltipClassName, onSelectSession, className, locale, tooltipContainer, ref, ...props }: ChatHistoryItemProps & {
        ref?: React.Ref<HTMLButtonElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const MemoFlxChatHistoryItem: import('../../../../../../node_modules/react').MemoExoticComponent<{
    ({ sessionId, summary, active, createdAt, tooltipClassName, onSelectSession, className, locale, tooltipContainer, ref, ...props }: ChatHistoryItemProps & {
        ref?: React.Ref<HTMLButtonElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}>;
export { MemoFlxChatHistoryItem, FlxChatHistoryItem };
declare const _default: {
    MemoFlxChatHistoryItem: import('../../../../../../node_modules/react').MemoExoticComponent<{
        ({ sessionId, summary, active, createdAt, tooltipClassName, onSelectSession, className, locale, tooltipContainer, ref, ...props }: ChatHistoryItemProps & {
            ref?: React.Ref<HTMLButtonElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    }>;
    FlxChatHistoryItem: {
        ({ sessionId, summary, active, createdAt, tooltipClassName, onSelectSession, className, locale, tooltipContainer, ref, ...props }: ChatHistoryItemProps & {
            ref?: React.Ref<HTMLButtonElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export default _default;
