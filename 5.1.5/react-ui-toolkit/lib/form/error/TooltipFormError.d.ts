import { Tooltip } from '@base-ui-components/react/tooltip';
export interface FlxTooltipFormErrorProps extends Tooltip.Trigger.Props {
    error?: string | null;
    container?: Tooltip.Portal.Props['container'];
}
export declare const FlxTooltipFormError: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<FlxTooltipFormErrorProps & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const MemoFlxTooltipFormError: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<FlxTooltipFormErrorProps & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
declare const _default: {
    FlxTooltipFormError: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<FlxTooltipFormErrorProps & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    MemoFlxTooltipFormError: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<FlxTooltipFormErrorProps & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
};
export default _default;
