export type VoiceRecorderState = 'idle' | 'recording';
export interface UseVoiceRecorderResult {
    state: VoiceRecorderState;
    duration: number;
    startRecording: () => void;
    stopRecording: () => Promise<Blob | null>;
    error: string | null;
}
export declare function useVoiceRecorder(onAutoStop?: (blob: Blob, duration: number) => void): UseVoiceRecorderResult;
