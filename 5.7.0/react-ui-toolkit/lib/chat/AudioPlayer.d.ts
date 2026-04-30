export interface AudioPlayerProps {
    audioUrl: string;
    audioDuration?: number;
    fetchAudio?: (url: string) => Promise<Blob | null>;
    onAudioFetched?: (blobUrl: string) => void;
    onAudioError?: (error: unknown) => void;
    onPlayingChange?: (playing: boolean) => void;
    /** Theme icon path for the play button. */
    playIconPath?: string | null;
    /** Theme icon path for the pause button. */
    pauseIconPath?: string | null;
    /** Localized "Voice Message" label. */
    voiceMessageLabel?: string;
    /** Localized aria-label for play button. */
    playAriaLabel?: string;
    /** Localized aria-label for pause button. */
    pauseAriaLabel?: string;
    /** Localized aria-label for the playback progress bar. */
    progressAriaLabel?: string;
}
declare const FlxAudioPlayer: ({ audioUrl, audioDuration, fetchAudio, onAudioFetched, onAudioError, onPlayingChange, playIconPath, pauseIconPath, voiceMessageLabel, playAriaLabel, pauseAriaLabel, progressAriaLabel, }: AudioPlayerProps) => import("react/jsx-runtime").JSX.Element;
declare const MemoFlxAudioPlayer: import('../../../../../../node_modules/react').MemoExoticComponent<({ audioUrl, audioDuration, fetchAudio, onAudioFetched, onAudioError, onPlayingChange, playIconPath, pauseIconPath, voiceMessageLabel, playAriaLabel, pauseAriaLabel, progressAriaLabel, }: AudioPlayerProps) => import("react/jsx-runtime").JSX.Element>;
export { FlxAudioPlayer, MemoFlxAudioPlayer };
