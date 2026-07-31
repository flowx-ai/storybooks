import { Tabs } from '@base-ui/react/tabs';
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
export declare const FlxStepper: {
    ({ onValueChange, completedSteps, value: valueProp, className, ref, ...props }: FlxStepperProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const _default: {
    FlxStepper: {
        ({ onValueChange, completedSteps, value: valueProp, className, ref, ...props }: FlxStepperProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    FlxMemoStepper: import('../../../../../../node_modules/react').MemoExoticComponent<{
        ({ onValueChange, completedSteps, value: valueProp, className, ref, ...props }: FlxStepperProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    }>;
};
export default _default;
export * from './StepperItem';
export * from './StepperList';
export * from './StepperContent';
