import { ComponentPropsWithRef } from '../../../../../../node_modules/react';

export interface FlxStepperContextValue {
    value: number;
    setCurrentStep: (index: number) => void;
    totalSteps: number;
    parentIndex?: number;
}
export interface FlxStepperProps extends ComponentPropsWithRef<'div'>, Omit<FlxStepperContextValue, 'totalSteps' | 'setCurrentStep' | 'value'> {
    onValueChange?: (index: number) => void;
    defaultValue?: number;
    value?: number;
}
export declare const useFlxStepperContext: () => FlxStepperContextValue;
export declare const FlxStepper: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxStepperProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
declare const _default: {
    FlxStepper: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxStepperProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    FlxMemoStepper: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxStepperProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
};
export default _default;
export * from './StepperItem';
export * from './StepperList';
export * from './StepperContent';
