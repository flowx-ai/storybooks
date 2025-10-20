import { ComponentPropsWithRef, ReactElement } from '../../../../../../node_modules/react';
import { FlxIconProps } from '../icon/Icon';
export interface FlxTabProps extends Omit<ComponentPropsWithRef<'li'>, 'id'> {
    title: string;
    iconComponent?: ReactElement<FlxIconProps> | null;
    activeIconComponent?: ReactElement<FlxIconProps> | null;
    id: number;
}
export declare const FlxTab: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxTabProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLLIElement>>;
declare const _default: {
    FlxTab: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxTabProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLLIElement>>;
    MemoFlxTab: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxTabProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLLIElement>>>;
};
export default _default;
