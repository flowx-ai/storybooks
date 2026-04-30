import { ReactElement } from '../../../../../../node_modules/react';
import { Tabs } from '@base-ui-components/react/tabs';
import { FlxIconProps } from '../icon/Icon';
export interface FlxTabProps extends Tabs.Tab.Props {
    title: string;
    iconComponent?: ReactElement<FlxIconProps> | null;
    activeIconComponent?: ReactElement<FlxIconProps> | null;
}
export declare const FlxTab: import('../../../../../../node_modules/react').ForwardRefExoticComponent<FlxTabProps & import('../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
declare const _default: {
    FlxTab: import('../../../../../../node_modules/react').ForwardRefExoticComponent<FlxTabProps & import('../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
    MemoFlxTab: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<FlxTabProps & import('../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>>;
};
export default _default;
