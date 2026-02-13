import { ComponentPropsWithoutRef } from '../../../../../../node_modules/react';
import { ToastData } from '@flowx/core-sdk';
export interface FlxToastProps extends ComponentPropsWithoutRef<'div'> {
    data: ToastData;
    onCloseToast?: (data: ToastData) => void;
}
export declare const FlxToast: ({ data, onCloseToast, className, ...props }: FlxToastProps) => import("react/jsx-runtime").JSX.Element;
declare const _default: {
    MemoFlxToast: import('../../../../../../node_modules/react').MemoExoticComponent<({ data, onCloseToast, className, ...props }: FlxToastProps) => import("react/jsx-runtime").JSX.Element>;
    FlxToast: ({ data, onCloseToast, className, ...props }: FlxToastProps) => import("react/jsx-runtime").JSX.Element;
};
export default _default;
