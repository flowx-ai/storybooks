import { ComponentPropsWithRef } from '../../../../../../node_modules/react';
import { ButtonVariant, IconPosition } from '../button/Button';
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
    icon?: IconPosition;
    iconComponent?: React.ReactNode;
    onFileSelect?: (event: FileUploadEvent) => void;
};
declare const FlxFileUpload: {
    ({ className, label, accept, maxFileSize, dataTestId, buttonVariant, icon, iconComponent, onFileSelect, ref, ...rest }: FlxFileUploadProps & {
        ref?: React.Ref<HTMLButtonElement>;
    }): import("react").JSX.Element;
    displayName: string;
};
declare const MemoFlxFileUpload: import('../../../../../../node_modules/react').MemoExoticComponent<{
    ({ className, label, accept, maxFileSize, dataTestId, buttonVariant, icon, iconComponent, onFileSelect, ref, ...rest }: FlxFileUploadProps & {
        ref?: React.Ref<HTMLButtonElement>;
    }): import("react").JSX.Element;
    displayName: string;
}>;
export { FlxFileUpload, MemoFlxFileUpload };
declare const _default: {
    FlxFileUpload: {
        ({ className, label, accept, maxFileSize, dataTestId, buttonVariant, icon, iconComponent, onFileSelect, ref, ...rest }: FlxFileUploadProps & {
            ref?: React.Ref<HTMLButtonElement>;
        }): import("react").JSX.Element;
        displayName: string;
    };
    MemoFlxFileUpload: import('../../../../../../node_modules/react').MemoExoticComponent<{
        ({ className, label, accept, maxFileSize, dataTestId, buttonVariant, icon, iconComponent, onFileSelect, ref, ...rest }: FlxFileUploadProps & {
            ref?: React.Ref<HTMLButtonElement>;
        }): import("react").JSX.Element;
        displayName: string;
    }>;
};
export default _default;
