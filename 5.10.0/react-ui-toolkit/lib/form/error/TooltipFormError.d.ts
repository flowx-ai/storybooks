import { Tooltip } from '@base-ui/react/tooltip';
export interface FlxTooltipFormErrorProps extends Tooltip.Trigger.Props {
    error?: string | null;
    container?: Tooltip.Portal.Props['container'];
}
export declare const FlxTooltipFormError: {
    ({ id, className, error, container, render, onPointerEnter, onPointerLeave, ref, ...props }: FlxTooltipFormErrorProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const MemoFlxTooltipFormError: import('../../../../../../../node_modules/react').MemoExoticComponent<{
    ({ id, className, error, container, render, onPointerEnter, onPointerLeave, ref, ...props }: FlxTooltipFormErrorProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}>;
declare const _default: {
    FlxTooltipFormError: {
        ({ id, className, error, container, render, onPointerEnter, onPointerLeave, ref, ...props }: FlxTooltipFormErrorProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    MemoFlxTooltipFormError: import('../../../../../../../node_modules/react').MemoExoticComponent<{
        ({ id, className, error, container, render, onPointerEnter, onPointerLeave, ref, ...props }: FlxTooltipFormErrorProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    }>;
};
export default _default;
