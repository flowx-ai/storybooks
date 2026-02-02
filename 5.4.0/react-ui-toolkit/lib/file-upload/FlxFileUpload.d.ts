import { ComponentPropsWithRef } from '../../../../../../node_modules/react';
import { ButtonVariant } from '../button/Button';
export type FileUploadErrorType = 'fileSizeExceeded' | 'invalidFileType';
export interface FileUploadEvent {
    file?: File;
    errors: Partial<Record<FileUploadErrorType, string>>;
}
export type FlxFileUploadProps = ComponentPropsWithRef<'button'> & {
    label: string;
    dataTestId?: string;
    accept?: string;
    maxFileSize?: number;
    buttonVariant?: ButtonVariant;
    onFileSelect?: (event: FileUploadEvent) => void;
};
declare const FlxFileUpload: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxFileUploadProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
declare const MemoFlxFileUpload: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxFileUploadProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>>;
export { FlxFileUpload, MemoFlxFileUpload };
declare const _default: {
    FlxFileUpload: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxFileUploadProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
    MemoFlxFileUpload: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxFileUploadProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>>;
};
export default _default;
