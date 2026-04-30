import { ReactElement } from '../../../../../../../node_modules/react';
import { Tooltip } from '@base-ui-components/react/tooltip';
import { FlxIconProps } from '../../icon/Icon';
export interface FlxFormInfoHelperProps extends Tooltip.Trigger.Props {
    iconComponent?: ReactElement<FlxIconProps> | null;
    container?: Tooltip.Portal.Props['container'];
}
export declare const FlxFormInfoHelper: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<FlxFormInfoHelperProps & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const MemoFlxFormInfoHelper: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<FlxFormInfoHelperProps & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
declare const _default: {
    FlxFormInfoHelper: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<FlxFormInfoHelperProps & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    MemoFlxFormInfoHelper: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<FlxFormInfoHelperProps & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
};
export default _default;
