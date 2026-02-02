import { ReactNode } from '../../../../../../node_modules/react';
import { Dialog } from '@base-ui-components/react/dialog';
interface FlxModalProps extends Dialog.Popup.Props, Omit<Dialog.Root.Props, 'onOpenChange'> {
    title?: string;
    subTitle?: string;
    dismissible?: boolean;
    onOpenChange?: (open: boolean) => void;
    onBackdropClick?: () => void;
    children: ReactNode;
    alertDialog?: ReactNode;
    closeIconAriaLabel?: string;
}
declare const FlxModal: import('../../../../../../node_modules/react').ForwardRefExoticComponent<FlxModalProps & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
declare const MemoFlxModal: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<FlxModalProps & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
export { FlxModal, MemoFlxModal };
declare const _default: {
    FlxModal: import('../../../../../../node_modules/react').ForwardRefExoticComponent<FlxModalProps & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    MemoFlxModal: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<FlxModalProps & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
};
export default _default;
