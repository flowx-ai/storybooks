import { FC, ComponentPropsWithoutRef, ComponentPropsWithRef } from '../../../../../../../node_modules/react';
export type ChoiceGroupDirection = 'column' | 'row';
export declare const DefaultChoiceGroupDirection: ChoiceGroupDirection;
export declare const FlxChoiceGroup: FC<ComponentPropsWithoutRef<'div'>>;
export interface FlxChoiceGroupContainerProps extends ComponentPropsWithRef<'div'> {
    dataUniqueid?: string;
    direction?: ChoiceGroupDirection;
}
export declare const FlxChoiceGroupContainer: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxChoiceGroupContainerProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const MemoFlxChoiceGroup: import('../../../../../../../node_modules/react').NamedExoticComponent<Omit<import('../../../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">>;
declare const _default: {
    FlxChoiceGroup: FC<Omit<import('../../../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">>;
    MemoFlxChoiceGroup: import('../../../../../../../node_modules/react').NamedExoticComponent<Omit<import('../../../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">>;
};
export default _default;
