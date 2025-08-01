import { ComponentPropsWithRef } from '../../../../../../node_modules/react';
export interface FlxTabBarContextValue {
    value?: string | number;
    setCurrentTab: (index: string | number) => void;
}
export interface FlxTabBarProps extends ComponentPropsWithRef<'div'>, Omit<FlxTabBarContextValue, 'setCurrentTab' | 'value'> {
    onValueChange?: (index: string | number) => void;
    defaultValue?: string | number;
    value?: string | number;
}
export declare const useFlxTabBarContext: () => FlxTabBarContextValue;
export declare const FlxTabBar: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxTabBarProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
declare const _default: {
    FlxTabBar: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxTabBarProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    FlxMemoTabBar: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxTabBarProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
};
export default _default;
export * from './Tab';
export * from './TabContent';
export * from './TabContentItem';
export * from './TabList';
