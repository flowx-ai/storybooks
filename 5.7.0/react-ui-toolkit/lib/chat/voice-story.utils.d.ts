/**
 * Generates a valid WAV file containing silence for use in Storybook stories.
 * Avoids committing binary audio assets to the repo.
 */
export declare function createSilentWavBlob(durationSeconds?: number): Blob;
export declare function createSilentAudioUrl(durationSeconds?: number): string;
