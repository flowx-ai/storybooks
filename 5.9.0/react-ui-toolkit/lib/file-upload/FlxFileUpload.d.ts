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
declare const FlxFileUpload: {
    ({ className, label, accept, maxFileSize, dataTestId, buttonVariant, onFileSelect, ref, ...rest }: FlxFileUploadProps & {
        ref?: React.Ref<HTMLButtonElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const MemoFlxFileUpload: import('../../../../../../node_modules/react').MemoExoticComponent<{
    ({ className, label, accept, maxFileSize, dataTestId, buttonVariant, onFileSelect, ref, ...rest }: FlxFileUploadProps & {
        ref?: React.Ref<HTMLButtonElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}>;
export { FlxFileUpload, MemoFlxFileUpload };
declare const _default: {
    FlxFileUpload: {
        ({ className, label, accept, maxFileSize, dataTestId, buttonVariant, onFileSelect, ref, ...rest }: FlxFileUploadProps & {
            ref?: React.Ref<HTMLButtonElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    MemoFlxFileUpload: import('../../../../../../node_modules/react').MemoExoticComponent<{
        ({ className, label, accept, maxFileSize, dataTestId, buttonVariant, onFileSelect, ref, ...rest }: FlxFileUploadProps & {
            ref?: React.Ref<HTMLButtonElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    }>;
};
export default _default;
