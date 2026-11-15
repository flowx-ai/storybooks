import { Tabs } from '@base-ui/react/tabs';
export interface FlxTabBarContextValue {
    value?: string;
}
export declare const useFlxTabBarContext: () => FlxTabBarContextValue;
export declare const FlxTabBar: {
    ({ value, className, children, ref, ...props }: Tabs.Root.Props & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react").JSX.Element;
    displayName: string;
};
declare const _default: {
    FlxTabBar: {
        ({ value, className, children, ref, ...props }: Tabs.Root.Props & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react").JSX.Element;
        displayName: string;
    };
    FlxMemoTabBar: import('../../../../../../node_modules/react').MemoExoticComponent<{
        ({ value, className, children, ref, ...props }: Tabs.Root.Props & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react").JSX.Element;
        displayName: string;
    }>;
};
export default _default;
export * from './Tab';
export * from './TabContent';
export * from './TabList';
