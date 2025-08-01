import { ComponentPropsWithRef, ReactNode } from '../../../../../../../../node_modules/react';
export interface FlxSelectOptionProps extends ComponentPropsWithRef<'div'> {
    isSelected?: boolean;
    disabled?: boolean;
    label: ReactNode;
    className?: string;
}
export declare const FlxSelectOption: import('../../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxSelectOptionProps, "ref"> & import('../../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const MemoFlxSelectOption: import('../../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxSelectOptionProps, "ref"> & import('../../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
declare const _default: {
    FlxSelectOption: import('../../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxSelectOptionProps, "ref"> & import('../../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    MemoFlxSelectOption: import('../../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxSelectOptionProps, "ref"> & import('../../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
};
export default _default;
