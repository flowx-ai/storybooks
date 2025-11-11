export interface FlxTabBarContextValue {
    value?: string;
}
export declare const useFlxTabBarContext: () => FlxTabBarContextValue;
export declare const FlxTabBar: import('../../../../../../node_modules/react').ForwardRefExoticComponent<import('@base-ui-components/react/tabs').TabsRootProps & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
declare const _default: {
    FlxTabBar: import('../../../../../../node_modules/react').ForwardRefExoticComponent<import('@base-ui-components/react/tabs').TabsRootProps & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    FlxMemoTabBar: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<import('@base-ui-components/react/tabs').TabsRootProps & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
};
export default _default;
export * from './Tab';
export * from './TabContent';
export * from './TabList';
