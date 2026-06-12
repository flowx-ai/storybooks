import { Tabs } from '@base-ui/react/tabs';
export interface FlxStepperListProps extends Tabs.List.Props {
    parentIndex?: number;
}
export declare const FlxStepperList: {
    ({ className, ref, ...props }: Tabs.List.Props & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const MemoFlxStepperList: import('../../../../../../node_modules/react').MemoExoticComponent<{
    ({ className, ref, ...props }: Tabs.List.Props & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}>;
declare const _default: {
    FlxStepperList: {
        ({ className, ref, ...props }: Tabs.List.Props & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    MemoFlxStepperList: import('../../../../../../node_modules/react').MemoExoticComponent<{
        ({ className, ref, ...props }: Tabs.List.Props & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    }>;
};
export default _default;
