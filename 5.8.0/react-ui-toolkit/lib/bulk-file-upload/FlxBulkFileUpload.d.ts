import { CSSProperties, ReactElement } from '../../../../../../node_modules/react';
import { FlxIconProps } from '../icon/Icon';
export type BulkFileUploadErrorType = 'invalidFileType';
export interface BulkFileUploadFileEntry {
    file: File;
    errors: Partial<Record<BulkFileUploadErrorType, string>>;
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
    accept?: string;
    maxFilesSize?: number;
    maxFiles?: number;
    filesSizeExceeded?: string;
    filesExceeded?: string;
    invalidFileTypeError?: string;
    disabled?: boolean;
    onFilesStartUpload?: (files: File[]) => void;
    deleteAriaLabel?: string;
    maxFileSizeText?: string;
    dropFilesAriaLabel?: string;
};
declare const FlxBulkFileUpload: import('../../../../../../node_modules/react').ForwardRefExoticComponent<FlxBulkFileUploadProps & import('../../../../../../node_modules/react').RefAttributes<FlxBulkFileUploadHandle>>;
declare const MemoFlxBulkFileUpload: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<FlxBulkFileUploadProps & import('../../../../../../node_modules/react').RefAttributes<FlxBulkFileUploadHandle>>>;
export { FlxBulkFileUpload, MemoFlxBulkFileUpload };
declare const _default: {
    FlxBulkFileUpload: import('../../../../../../node_modules/react').ForwardRefExoticComponent<FlxBulkFileUploadProps & import('../../../../../../node_modules/react').RefAttributes<FlxBulkFileUploadHandle>>;
    MemoFlxBulkFileUpload: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<FlxBulkFileUploadProps & import('../../../../../../node_modules/react').RefAttributes<FlxBulkFileUploadHandle>>>;
};
export default _default;
