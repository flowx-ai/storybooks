import { Tooltip } from '@base-ui-components/react/tooltip';
interface FlxTooltipProps extends Tooltip.Popup.Props {
    side?: Tooltip.Positioner.Props['side'];
    container?: Tooltip.Portal.Props['container'];
    anchor?: Tooltip.Positioner.Props['anchor'];
}
export declare const FlxTooltip: import('../../../../../../node_modules/react').ForwardRefExoticComponent<FlxTooltipProps & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const MemoFlxTooltip: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<FlxTooltipProps & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
declare const _default: {
    MemoFlxTooltip: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<FlxTooltipProps & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
    FlxTooltip: import('../../../../../../node_modules/react').ForwardRefExoticComponent<FlxTooltipProps & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
};
export default _default;
