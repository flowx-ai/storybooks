import { ComponentPropsWithRef } from '../../../../../../../node_modules/react';

export interface FlxFormLabelProps extends ComponentPropsWithRef<'label'> {
    disabled?: boolean;
    markdownLabel?: boolean;
}
export declare const FlxFormLabel: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxFormLabelProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLLabelElement>>;
export declare const MemoFlxFormLabel: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxFormLabelProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLLabelElement>>>;
declare const _default: {
    FlxFormLabel: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxFormLabelProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLLabelElement>>;
    MemoFlxFormLabel: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxFormLabelProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLLabelElement>>>;
};
export default _default;
