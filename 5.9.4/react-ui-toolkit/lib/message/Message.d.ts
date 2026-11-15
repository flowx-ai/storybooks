import { ReactNode, ComponentPropsWithRef, ReactElement } from '../../../../../../node_modules/react';
import { FlxIconProps } from '../icon/Icon';
export type MessageType = 'success' | 'warning' | 'error' | 'info';
export declare const DefaultMessageType: MessageType;
export type MessageDisplay = 'text' | 'border' | 'fill';
export declare const DefaultMessageDisplay: MessageDisplay;
export type MessageLayout = 'row' | 'column';
export declare const DefaultMessageLayout: MessageLayout;
export interface FlxMessageProps extends ComponentPropsWithRef<'div'> {
    children: ReactNode;
    type?: MessageType;
    display?: MessageDisplay;
    layout?: MessageLayout;
    iconComponent?: ReactElement<FlxIconProps> | null;
}
export declare const FlxMessage: {
    ({ children, type, display, layout, iconComponent, className, ref, ...props }: FlxMessageProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react").JSX.Element;
    displayName: string;
};
export declare const MemoFlxMessage: import('../../../../../../node_modules/react').MemoExoticComponent<{
    ({ children, type, display, layout, iconComponent, className, ref, ...props }: FlxMessageProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react").JSX.Element;
    displayName: string;
}>;
declare const _default: {
    FlxMessage: {
        ({ children, type, display, layout, iconComponent, className, ref, ...props }: FlxMessageProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react").JSX.Element;
        displayName: string;
    };
    MemoFlxMessage: import('../../../../../../node_modules/react').MemoExoticComponent<{
        ({ children, type, display, layout, iconComponent, className, ref, ...props }: FlxMessageProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react").JSX.Element;
        displayName: string;
    }>;
};
export default _default;
