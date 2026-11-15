export interface AudioPlayerState {
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    progress: number;
}
export interface UseAudioPlayerOptions {
    fetchAudio?: (url: string) => Promise<Blob | null>;
    onAudioFetched?: (blobUrl: string) => void;
    onAudioError?: (error: unknown) => void;
}
export declare function useAudioPlayer(audioUrl: string | null, fallbackDuration?: number, options?: UseAudioPlayerOptions): {
    isPlaying: boolean;
    isLoading: boolean;
    currentTime: number;
    duration: number;
    progress: number;
    togglePlay: () => void;
    stop: () => void;
};
