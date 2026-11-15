import { Tooltip } from '@base-ui/react/tooltip';
export { Tooltip };
export declare const DEFAULT_SHOW_DELAY = 300;
export declare const DEFAULT_HIDE_DELAY = 300;
export declare const DEFAULT_SHOW_DELAY_EXTENDED = 1500;
interface FlxTooltipProps extends Tooltip.Popup.Props {
    side?: Tooltip.Positioner.Props['side'];
    align?: Tooltip.Positioner.Props['align'];
    container?: Tooltip.Portal.Props['container'];
    anchor?: Tooltip.Positioner.Props['anchor'];
    sideOffset?: Tooltip.Positioner.Props['sideOffset'];
    alignOffset?: Tooltip.Positioner.Props['alignOffset'];
    collisionAvoidance?: Tooltip.Positioner.Props['collisionAvoidance'];
}
export declare const FlxTooltip: {
    ({ children, className, container, side, align, anchor, sideOffset, alignOffset, collisionAvoidance, ref, ...props }: FlxTooltipProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react").JSX.Element;
    displayName: string;
};
export declare const MemoFlxTooltip: import('../../../../../../node_modules/react').MemoExoticComponent<{
    ({ children, className, container, side, align, anchor, sideOffset, alignOffset, collisionAvoidance, ref, ...props }: FlxTooltipProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react").JSX.Element;
    displayName: string;
}>;
declare const _default: {
    MemoFlxTooltip: import('../../../../../../node_modules/react').MemoExoticComponent<{
        ({ children, className, container, side, align, anchor, sideOffset, alignOffset, collisionAvoidance, ref, ...props }: FlxTooltipProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react").JSX.Element;
        displayName: string;
    }>;
    FlxTooltip: {
        ({ children, className, container, side, align, anchor, sideOffset, alignOffset, collisionAvoidance, ref, ...props }: FlxTooltipProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react").JSX.Element;
        displayName: string;
    };
};
export default _default;
