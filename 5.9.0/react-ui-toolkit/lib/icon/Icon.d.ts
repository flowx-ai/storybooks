import { ComponentPropsWithRef, SyntheticEvent } from '../../../../../../node_modules/react';
import { FlxIconName } from './icon_set';
export interface FlxIconProps extends ComponentPropsWithRef<'div'> {
    name?: FlxIconName;
    path?: string;
    className?: string;
    onClick?: (event: SyntheticEvent) => void;
    onIconLoad?: (success: boolean) => void;
}
export declare const FlxIcon: {
    ({ name, path, className, onClick, onIconLoad, ref, ...props }: FlxIconProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react/jsx-runtime").JSX.Element | null;
    displayName: string;
};
export declare const MemoFlxIcon: import('../../../../../../node_modules/react').MemoExoticComponent<{
    ({ name, path, className, onClick, onIconLoad, ref, ...props }: FlxIconProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react/jsx-runtime").JSX.Element | null;
    displayName: string;
}>;
declare const _default: {
    FlxIcon: {
        ({ name, path, className, onClick, onIconLoad, ref, ...props }: FlxIconProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react/jsx-runtime").JSX.Element | null;
        displayName: string;
    };
    MemoFlxIcon: import('../../../../../../node_modules/react').MemoExoticComponent<{
        ({ name, path, className, onClick, onIconLoad, ref, ...props }: FlxIconProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react/jsx-runtime").JSX.Element | null;
        displayName: string;
    }>;
};
export default _default;
