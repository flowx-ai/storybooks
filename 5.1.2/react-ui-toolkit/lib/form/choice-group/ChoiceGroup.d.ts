import { ComponentPropsWithRef } from '../../../../../../../node_modules/react';
export type ChoiceGroupDirection = 'column' | 'row';
export declare const DefaultChoiceGroupDirection: ChoiceGroupDirection;
export declare const FlxChoiceGroup: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<import('../../../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export interface FlxChoiceGroupContainerProps extends ComponentPropsWithRef<'div'> {
    dataUniqueid?: string;
    direction?: ChoiceGroupDirection;
}
export declare const FlxChoiceGroupContainer: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxChoiceGroupContainerProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const MemoFlxChoiceGroup: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<import('../../../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
declare const _default: {
    FlxChoiceGroup: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<import('../../../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    MemoFlxChoiceGroup: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<import('../../../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
};
export default _default;
