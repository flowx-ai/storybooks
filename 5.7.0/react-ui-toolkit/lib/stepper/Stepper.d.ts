import { Tabs } from '@base-ui-components/react/tabs';
export interface FlxStepperContextValue {
    value: number;
    totalSteps: number;
    parentIndex?: number;
    completedSteps: number[];
}
export interface FlxStepperProps extends Tabs.Root.Props, Omit<FlxStepperContextValue, 'totalSteps' | 'setCurrentStep' | 'value' | 'onValueChange'> {
    onValueChange?: (index: number) => void;
    completedSteps: number[];
}
export declare const useFlxStepperContext: () => FlxStepperContextValue;
export declare const FlxStepper: import('../../../../../../node_modules/react').ForwardRefExoticComponent<FlxStepperProps & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
declare const _default: {
    FlxStepper: import('../../../../../../node_modules/react').ForwardRefExoticComponent<FlxStepperProps & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    FlxMemoStepper: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<FlxStepperProps & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
};
export default _default;
export * from './StepperItem';
export * from './StepperList';
export * from './StepperContent';
