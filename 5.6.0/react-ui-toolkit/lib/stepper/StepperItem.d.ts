import { Tabs } from '@base-ui-components/react/tabs';
export interface FlxStepperItemProps extends Tabs.Tab.Props {
    completed?: boolean;
    label: string;
}
export declare const FlxStepperItem: import('../../../../../../node_modules/react').ForwardRefExoticComponent<FlxStepperItemProps & import('../../../../../../node_modules/react').RefAttributes<HTMLLIElement>>;
export declare const FlxMemoStepperItem: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<FlxStepperItemProps & import('../../../../../../node_modules/react').RefAttributes<HTMLLIElement>>>;
declare const _default: {
    FlxStepperItem: import('../../../../../../node_modules/react').ForwardRefExoticComponent<FlxStepperItemProps & import('../../../../../../node_modules/react').RefAttributes<HTMLLIElement>>;
    FlxMemoStepperItem: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<FlxStepperItemProps & import('../../../../../../node_modules/react').RefAttributes<HTMLLIElement>>>;
};
export default _default;
