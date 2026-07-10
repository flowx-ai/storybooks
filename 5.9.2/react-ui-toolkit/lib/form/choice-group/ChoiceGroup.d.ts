import { ComponentPropsWithoutRef, ComponentPropsWithRef } from '../../../../../../../node_modules/react';
export type ChoiceGroupDirection = 'column' | 'row';
export declare const DefaultChoiceGroupDirection: ChoiceGroupDirection;
export declare const FlxChoiceGroup: {
    ({ children, style, ref, ...props }: ComponentPropsWithoutRef<"div"> & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export interface FlxChoiceGroupContainerProps extends ComponentPropsWithRef<'div'> {
    dataUniqueid?: string;
    direction?: ChoiceGroupDirection;
}
export declare const FlxChoiceGroupContainer: {
    ({ children, className, direction, ref, ...props }: FlxChoiceGroupContainerProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const MemoFlxChoiceGroup: import('../../../../../../../node_modules/react').MemoExoticComponent<{
    ({ children, style, ref, ...props }: ComponentPropsWithoutRef<"div"> & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}>;
declare const _default: {
    FlxChoiceGroup: {
        ({ children, style, ref, ...props }: ComponentPropsWithoutRef<"div"> & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    MemoFlxChoiceGroup: import('../../../../../../../node_modules/react').MemoExoticComponent<{
        ({ children, style, ref, ...props }: ComponentPropsWithoutRef<"div"> & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    }>;
};
export default _default;
