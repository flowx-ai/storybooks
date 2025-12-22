import { ReactNode, HTMLAttributes } from '../../../../../../node_modules/react';

interface FlxModalProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    subTitle?: string;
    dismissible?: boolean;
    isOpen?: boolean;
    onClose: () => void;
    onBackdropClick?: () => void;
    children: ReactNode;
}
declare const FlxModal: import('../../../../../../node_modules/react').ForwardRefExoticComponent<FlxModalProps & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
declare const MemoFlxModal: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<FlxModalProps & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
export { FlxModal, MemoFlxModal };
declare const _default: {
    FlxModal: import('../../../../../../node_modules/react').ForwardRefExoticComponent<FlxModalProps & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    MemoFlxModal: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<FlxModalProps & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
};
export default _default;
