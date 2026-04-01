import { FC } from '../../../../../../node_modules/react';
import { SuggestedPrompt } from './Chat.dictionary';
export interface ChatSuggestedPromptsProps {
    prompts: SuggestedPrompt[];
    title?: string;
    onPromptSelected: (value: string) => void;
    className?: string;
    tooltipClassName?: string;
}
declare const FlxChatSuggestedPrompts: FC<ChatSuggestedPromptsProps>;
declare const MemoFlxChatSuggestedPrompts: import('../../../../../../node_modules/react').NamedExoticComponent<ChatSuggestedPromptsProps>;
export { FlxChatSuggestedPrompts, MemoFlxChatSuggestedPrompts };
