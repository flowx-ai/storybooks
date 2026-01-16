import { ComponentPropsWithRef, ReactElement } from '../../../../../../../../node_modules/react';
import { FlxIconProps } from '../../../icon/Icon';
export interface FlxMultiSelectOptionProps extends ComponentPropsWithRef<'div'> {
    isSelected?: boolean;
    disabled?: boolean;
    label: string;
    className?: string;
    selectedIcon?: ReactElement<FlxIconProps> | null;
    unselectedIcon?: ReactElement<FlxIconProps> | null;
    isFocused?: boolean;
}
export declare const FlxMultiSelectOption: import('../../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxMultiSelectOptionProps, "ref"> & import('../../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const MemoFlxMultiSelectOption: import('../../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxMultiSelectOptionProps, "ref"> & import('../../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
declare const _default: {
    FlxMultiSelectOption: import('../../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxMultiSelectOptionProps, "ref"> & import('../../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    MemoFlxMultiSelectOption: import('../../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxMultiSelectOptionProps, "ref"> & import('../../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
};
export default _default;
