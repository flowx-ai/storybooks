export interface SuggestedPrompt {
    label: string;
    prompt: string | null;
}
export interface ChatMessage {
    id?: string;
    content: string;
    sender: 'sender' | 'receiver';
    timestamp?: Date | string;
    hasError?: boolean;
}
