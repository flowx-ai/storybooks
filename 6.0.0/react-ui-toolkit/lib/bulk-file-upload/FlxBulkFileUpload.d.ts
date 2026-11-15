import { CSSProperties, ReactElement } from '../../../../../../node_modules/react';
import { FlxIconProps } from '../icon/Icon';
export type BulkFileUploadErrorType = 'invalidFileType';
export interface BulkFileUploadFileEntry {
    file: File;
    errors: Partial<Record<BulkFileUploadErrorType, string>>;
}
export type BulkFileUploadRejectionError = 'invalidFileType' | 'totalSizeExceeded' | 'maxFilesExceeded';
/** A selection the component cannot upload: a file of a wrong type, or a list over a limit. */
export interface BulkFileUploadRejectedEvent {
    /**
     * The whole list when the selection takes it over a limit, so the files describe what broke it;
     * else the selection. A list already over a limit was reported, so later selections send only
     * their own files.
     */
    files: File[];
    errors: BulkFileUploadRejectionError[];
}
export interface FlxBulkFileUploadHandle {
    clearFiles: () => void;
}
export type FlxBulkFileUploadProps = {
    className?: string;
    buttonClassName?: string;
    errorClassName?: string;
    documentIcon?: ReactElement<FlxIconProps> | null;
    titleIcon?: ReactElement<FlxIconProps> | null;
    deleteIcon?: ReactElement<FlxIconProps> | null;
    style?: CSSProperties;
    title?: string;
    subTitle?: string;
    browseLabel?: string;
    resetLabel?: string;
    uploadLabel?: string;
    dataTestId?: string;
    /** The SDK's component marker (`data-uniqueid`); the headless renderer measures by it. */
    dataUniqueId?: string;
    accept?: string;
    maxFilesSize?: number;
    maxFiles?: number;
    filesSizeExceeded?: string;
    filesExceeded?: string;
    invalidFileTypeError?: string;
    disabled?: boolean;
    onFilesStartUpload?: (files: File[]) => void;
    /** Once per dropped or browsed selection that the component rejects. */
    onFilesRejected?: (event: BulkFileUploadRejectedEvent) => void;
    deleteAriaLabel?: string;
    maxFileSizeText?: string;
    dropFilesAriaLabel?: string;
};
declare const FlxBulkFileUpload: {
    ({ className, buttonClassName, errorClassName, titleIcon, documentIcon, deleteIcon, style, title, subTitle, browseLabel, resetLabel, uploadLabel, accept, maxFilesSize, maxFiles, filesSizeExceeded, filesExceeded, invalidFileTypeError, disabled, dataTestId, dataUniqueId, onFilesStartUpload, onFilesRejected, deleteAriaLabel, maxFileSizeText, dropFilesAriaLabel, ref, }: FlxBulkFileUploadProps & {
        ref?: React.Ref<FlxBulkFileUploadHandle>;
    }): import('../../../../../../node_modules/react').JSX.Element;
    displayName: string;
};
declare const MemoFlxBulkFileUpload: import('../../../../../../node_modules/react').MemoExoticComponent<{
    ({ className, buttonClassName, errorClassName, titleIcon, documentIcon, deleteIcon, style, title, subTitle, browseLabel, resetLabel, uploadLabel, accept, maxFilesSize, maxFiles, filesSizeExceeded, filesExceeded, invalidFileTypeError, disabled, dataTestId, dataUniqueId, onFilesStartUpload, onFilesRejected, deleteAriaLabel, maxFileSizeText, dropFilesAriaLabel, ref, }: FlxBulkFileUploadProps & {
        ref?: React.Ref<FlxBulkFileUploadHandle>;
    }): import('../../../../../../node_modules/react').JSX.Element;
    displayName: string;
}>;
export { FlxBulkFileUpload, MemoFlxBulkFileUpload };
declare const _default: {
    FlxBulkFileUpload: {
        ({ className, buttonClassName, errorClassName, titleIcon, documentIcon, deleteIcon, style, title, subTitle, browseLabel, resetLabel, uploadLabel, accept, maxFilesSize, maxFiles, filesSizeExceeded, filesExceeded, invalidFileTypeError, disabled, dataTestId, dataUniqueId, onFilesStartUpload, onFilesRejected, deleteAriaLabel, maxFileSizeText, dropFilesAriaLabel, ref, }: FlxBulkFileUploadProps & {
            ref?: React.Ref<FlxBulkFileUploadHandle>;
        }): import('../../../../../../node_modules/react').JSX.Element;
        displayName: string;
    };
    MemoFlxBulkFileUpload: import('../../../../../../node_modules/react').MemoExoticComponent<{
        ({ className, buttonClassName, errorClassName, titleIcon, documentIcon, deleteIcon, style, title, subTitle, browseLabel, resetLabel, uploadLabel, accept, maxFilesSize, maxFiles, filesSizeExceeded, filesExceeded, invalidFileTypeError, disabled, dataTestId, dataUniqueId, onFilesStartUpload, onFilesRejected, deleteAriaLabel, maxFileSizeText, dropFilesAriaLabel, ref, }: FlxBulkFileUploadProps & {
            ref?: React.Ref<FlxBulkFileUploadHandle>;
        }): import('../../../../../../node_modules/react').JSX.Element;
        displayName: string;
    }>;
};
export default _default;
