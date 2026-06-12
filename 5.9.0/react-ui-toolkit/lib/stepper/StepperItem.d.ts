import { Tabs } from '@base-ui/react/tabs';
export interface FlxStepperItemProps extends Tabs.Tab.Props {
    completed?: boolean;
    label: string;
}
export declare const FlxStepperItem: {
    ({ label, completed: propCompleted, children, className, value: valueProp, ref, ...props }: FlxStepperItemProps & {
        ref?: React.Ref<HTMLLIElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const FlxMemoStepperItem: import('../../../../../../node_modules/react').MemoExoticComponent<{
    ({ label, completed: propCompleted, children, className, value: valueProp, ref, ...props }: FlxStepperItemProps & {
        ref?: React.Ref<HTMLLIElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}>;
declare const _default: {
    FlxStepperItem: {
        ({ label, completed: propCompleted, children, className, value: valueProp, ref, ...props }: FlxStepperItemProps & {
            ref?: React.Ref<HTMLLIElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    FlxMemoStepperItem: import('../../../../../../node_modules/react').MemoExoticComponent<{
        ({ label, completed: propCompleted, children, className, value: valueProp, ref, ...props }: FlxStepperItemProps & {
            ref?: React.Ref<HTMLLIElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    }>;
};
export default _default;
