import { ComponentPropsWithRef, FC, ReactNode } from '../../../../../../../node_modules/react';
export interface FlxFormLabelProps extends ComponentPropsWithRef<'label'> {
    disabled?: boolean;
    markdownLabel?: boolean;
    htmlFor?: string;
}
export declare const FlxFormLabel: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxFormLabelProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLLabelElement>>;
export declare const MemoFlxFormLabel: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxFormLabelProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLLabelElement>>>;
export declare const FlxFormLabelContainer: FC<{
    children?: ReactNode;
    className?: string;
}>;
declare const _default: {
    FlxFormLabel: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxFormLabelProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLLabelElement>>;
    MemoFlxFormLabel: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxFormLabelProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLLabelElement>>>;
    FlxFormLabelContainer: FC<{
        children?: ReactNode;
        className?: string;
    }>;
};
export default _default;
