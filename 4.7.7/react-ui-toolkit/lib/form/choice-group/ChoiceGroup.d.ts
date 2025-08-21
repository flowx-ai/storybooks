import { FieldError } from 'react-hook-form';
import { ComponentPropsWithRef, CSSProperties } from '../../../../../../../node_modules/react';

export type ChoiceGroupDirection = 'column' | 'row';
export declare const DefaultChoiceGroupDirection: ChoiceGroupDirection;
export interface FlxChoiceGroupProps extends ComponentPropsWithRef<'div'> {
    error?: FieldError;
    direction?: ChoiceGroupDirection;
    wrapperStyle?: CSSProperties;
}
export declare const FlxChoiceGroup: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxChoiceGroupProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const MemoFlxChoiceGroup: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxChoiceGroupProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
declare const _default: {
    FlxChoiceGroup: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxChoiceGroupProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    MemoFlxChoiceGroup: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxChoiceGroupProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
};
export default _default;
