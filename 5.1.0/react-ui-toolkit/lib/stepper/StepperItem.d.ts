import { ComponentPropsWithRef } from '../../../../../../node_modules/react';
export interface FlxStepperItemProps extends ComponentPropsWithRef<'li'> {
    completed?: boolean;
    index: number;
    label: string;
    disabled?: boolean;
}
export declare const FlxStepperItem: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxStepperItemProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLLIElement>>;
export declare const FlxMemoStepperItem: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxStepperItemProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLLIElement>>>;
declare const _default: {
    FlxStepperItem: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxStepperItemProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLLIElement>>;
    FlxMemoStepperItem: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxStepperItemProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLLIElement>>>;
};
export default _default;
