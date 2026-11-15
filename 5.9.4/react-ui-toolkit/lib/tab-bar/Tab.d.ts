import { ReactElement } from '../../../../../../node_modules/react';
import { Tabs } from '@base-ui/react/tabs';
import { FlxIconProps } from '../icon/Icon';
export interface FlxTabProps extends Tabs.Tab.Props {
    label: string;
    iconComponent?: ReactElement<FlxIconProps> | null;
    activeIconComponent?: ReactElement<FlxIconProps> | null;
}
export declare const FlxTab: {
    ({ value: propValue, label, iconComponent, activeIconComponent, className, ref, ...props }: FlxTabProps & {
        ref?: React.Ref<HTMLButtonElement>;
    }): import("react").JSX.Element;
    displayName: string;
};
declare const _default: {
    FlxTab: {
        ({ value: propValue, label, iconComponent, activeIconComponent, className, ref, ...props }: FlxTabProps & {
            ref?: React.Ref<HTMLButtonElement>;
        }): import("react").JSX.Element;
        displayName: string;
    };
    MemoFlxTab: {
        ({ value: propValue, label, iconComponent, activeIconComponent, className, ref, ...props }: FlxTabProps & {
            ref?: React.Ref<HTMLButtonElement>;
        }): import("react").JSX.Element;
        displayName: string;
    };
};
export default _default;
