import { ReactElement } from '../../../../../../../node_modules/react';
import { Tooltip } from '@base-ui/react/tooltip';
import { FlxIconProps } from '../../icon/Icon';
export interface FlxFormInfoHelperProps extends Tooltip.Trigger.Props {
    iconComponent?: ReactElement<FlxIconProps> | null;
    container?: Tooltip.Portal.Props['container'];
}
export declare const FlxFormInfoHelper: {
    ({ children, className, container, iconComponent, ref, ...props }: FlxFormInfoHelperProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import('../../../../../../../node_modules/react').JSX.Element;
    displayName: string;
};
export declare const MemoFlxFormInfoHelper: import('../../../../../../../node_modules/react').MemoExoticComponent<{
    ({ children, className, container, iconComponent, ref, ...props }: FlxFormInfoHelperProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import('../../../../../../../node_modules/react').JSX.Element;
    displayName: string;
}>;
declare const _default: {
    FlxFormInfoHelper: {
        ({ children, className, container, iconComponent, ref, ...props }: FlxFormInfoHelperProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import('../../../../../../../node_modules/react').JSX.Element;
        displayName: string;
    };
    MemoFlxFormInfoHelper: import('../../../../../../../node_modules/react').MemoExoticComponent<{
        ({ children, className, container, iconComponent, ref, ...props }: FlxFormInfoHelperProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import('../../../../../../../node_modules/react').JSX.Element;
        displayName: string;
    }>;
};
export default _default;
