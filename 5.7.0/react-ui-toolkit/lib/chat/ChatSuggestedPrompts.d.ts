import { FC } from '../../../../../../node_modules/react';
import { Tooltip } from '@base-ui-components/react/tooltip';
import { SuggestedPrompt } from './Chat.dictionary';
export interface ChatSuggestedPromptsProps {
    prompts: SuggestedPrompt[];
    title?: string;
    onPromptSelected: (prompt: SuggestedPrompt) => void;
    className?: string;
    tooltipClassName?: string;
    /** Portal container for tooltips (ensures styling when rendered inside a portal boundary). */
    tooltipContainer?: Tooltip.Portal.Props['container'];
}
declare const FlxChatSuggestedPrompts: FC<ChatSuggestedPromptsProps>;
declare const MemoFlxChatSuggestedPrompts: import('../../../../../../node_modules/react').NamedExoticComponent<ChatSuggestedPromptsProps>;
export { FlxChatSuggestedPrompts, MemoFlxChatSuggestedPrompts };
