import { ReactNode } from '../../../../../../node_modules/react';
import { Dialog } from '@base-ui/react/dialog';
interface FlxModalProps extends Dialog.Popup.Props, Omit<Dialog.Root.Props, 'onOpenChange'> {
    title?: string;
    subTitle?: string;
    dismissible?: boolean;
    onOpenChange?: (open: boolean) => void;
    onBackdropClick?: () => void;
    children: ReactNode;
    alertDialog?: ReactNode;
    closeIconAriaLabel?: string;
    closeIconPath?: string;
    container?: HTMLElement;
    headerClassName?: string;
    panelClass?: string;
    backdropClass?: string;
}
declare const FlxModal: {
    ({ title, onBackdropClick, subTitle, dismissible, open, onOpenChange, className, headerClassName, panelClass, backdropClass, style, children, alertDialog, closeIconAriaLabel, closeIconPath, container, ref, }: FlxModalProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react").JSX.Element;
    displayName: string;
};
declare const MemoFlxModal: import('../../../../../../node_modules/react').MemoExoticComponent<{
    ({ title, onBackdropClick, subTitle, dismissible, open, onOpenChange, className, headerClassName, panelClass, backdropClass, style, children, alertDialog, closeIconAriaLabel, closeIconPath, container, ref, }: FlxModalProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react").JSX.Element;
    displayName: string;
}>;
export { FlxModal, MemoFlxModal };
declare const _default: {
    FlxModal: {
        ({ title, onBackdropClick, subTitle, dismissible, open, onOpenChange, className, headerClassName, panelClass, backdropClass, style, children, alertDialog, closeIconAriaLabel, closeIconPath, container, ref, }: FlxModalProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react").JSX.Element;
        displayName: string;
    };
    MemoFlxModal: import('../../../../../../node_modules/react').MemoExoticComponent<{
        ({ title, onBackdropClick, subTitle, dismissible, open, onOpenChange, className, headerClassName, panelClass, backdropClass, style, children, alertDialog, closeIconAriaLabel, closeIconPath, container, ref, }: FlxModalProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react").JSX.Element;
        displayName: string;
    }>;
};
export default _default;
