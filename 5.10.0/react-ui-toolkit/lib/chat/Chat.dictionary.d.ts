import { ChatMessageType } from '@flowx/core-sdk';
export interface SuggestedPrompt {
    label: string;
    prompt: string | null;
}
export interface ChatMessageFile {
    name: string;
    extension: string;
    mimeType: string;
    downloadUrl?: string;
}
export interface ChatMessage {
    id?: string;
    content: string;
    sender: 'sender' | 'receiver';
    timestamp?: Date | string;
    hasError?: boolean;
    audioUrl?: string;
    voiceMessageStatus?: 'sending' | 'error' | 'sent';
    audioDuration?: number;
    onRetryVoice?: () => void;
    type?: ChatMessageType;
    files?: ChatMessageFile[];
}
export interface ChatAttachmentEntry {
    file: File;
    errors: Partial<Record<'invalidFileType', string>>;
}
export interface AttachmentsLabels {
    attachAriaLabel?: string;
    removeAriaLabel?: string;
    downloadAriaLabel?: string;
}
