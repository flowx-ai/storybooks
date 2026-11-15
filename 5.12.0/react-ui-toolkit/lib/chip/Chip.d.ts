import { ComponentPropsWithRef, ReactElement, SyntheticEvent } from '../../../../../../node_modules/react';
import { FlxIconProps } from '../icon/Icon';
export interface FlxChipProps extends ComponentPropsWithRef<'div'> {
    label: string;
    onClose?: (event: SyntheticEvent) => void;
    closeIcon?: ReactElement<FlxIconProps> | null;
    disabled?: boolean;
}
export declare const FlxChip: {
    ({ label, onClose, closeIcon, className, disabled, ref, ...props }: FlxChipProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react").JSX.Element;
    displayName: string;
};
export declare const MemoFlxChip: import('../../../../../../node_modules/react').MemoExoticComponent<{
    ({ label, onClose, closeIcon, className, disabled, ref, ...props }: FlxChipProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react").JSX.Element;
    displayName: string;
}>;
declare const _default: {
    MemoFlxChip: import('../../../../../../node_modules/react').MemoExoticComponent<{
        ({ label, onClose, closeIcon, className, disabled, ref, ...props }: FlxChipProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react").JSX.Element;
        displayName: string;
    }>;
    FlxChip: {
        ({ label, onClose, closeIcon, className, disabled, ref, ...props }: FlxChipProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react").JSX.Element;
        displayName: string;
    };
};
export default _default;
