export type FileUploadErrorType = 'invalidFileType';
export declare const formatFileSize: (bytes: number) => string;
export declare const isValidFileType: (file: File, accept?: string) => Partial<Record<FileUploadErrorType, string>>;
export declare const normalizeAcceptProp: (accept: string) => string;
/**
 * Extracts the file extension from a file name or path, suffixed with a
 * trailing dot for the chip subtitle (e.g. `pptx.`). Returns '' when there is
 * no extension.
 */
export declare const getFileExtension: (nameOrPath: string) => string;
