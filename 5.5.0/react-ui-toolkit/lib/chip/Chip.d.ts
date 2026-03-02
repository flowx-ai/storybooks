import { ComponentPropsWithRef, ReactElement, SyntheticEvent } from '../../../../../../node_modules/react';
import { FlxIconProps } from '../icon/Icon';
export interface FlxChipProps extends ComponentPropsWithRef<'div'> {
    label: string;
    onClose?: (event: SyntheticEvent) => void;
    closeIcon?: ReactElement<FlxIconProps> | null;
    disabled?: boolean;
}
export declare const FlxChip: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxChipProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const MemoFlxChip: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxChipProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
declare const _default: {
    MemoFlxChip: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxChipProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
    FlxChip: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxChipProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
};
export default _default;
