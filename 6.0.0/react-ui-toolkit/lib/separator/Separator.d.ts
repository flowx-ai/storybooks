import { ComponentPropsWithoutRef, Ref } from '../../../../../../node_modules/react';
export type SeparatorDirection = 'vertical' | 'horizontal';
export declare const DefaultSeparatorDirection: SeparatorDirection;
export interface FlxSeparatorProps extends ComponentPropsWithoutRef<'div'> {
    direction?: SeparatorDirection;
}
export declare const FlxSeparator: {
    ({ direction, className, role, ref, ...props }: FlxSeparatorProps & {
        ref?: Ref<HTMLDivElement>;
    }): import('../../../../../../node_modules/react').JSX.Element;
    displayName: string;
};
export declare const MemoFlxSeparator: import('../../../../../../node_modules/react').MemoExoticComponent<{
    ({ direction, className, role, ref, ...props }: FlxSeparatorProps & {
        ref?: Ref<HTMLDivElement>;
    }): import('../../../../../../node_modules/react').JSX.Element;
    displayName: string;
}>;
declare const _default: {
    FlxSeparator: {
        ({ direction, className, role, ref, ...props }: FlxSeparatorProps & {
            ref?: Ref<HTMLDivElement>;
        }): import('../../../../../../node_modules/react').JSX.Element;
        displayName: string;
    };
    MemoFlxSeparator: import('../../../../../../node_modules/react').MemoExoticComponent<{
        ({ direction, className, role, ref, ...props }: FlxSeparatorProps & {
            ref?: Ref<HTMLDivElement>;
        }): import('../../../../../../node_modules/react').JSX.Element;
        displayName: string;
    }>;
};
export default _default;
