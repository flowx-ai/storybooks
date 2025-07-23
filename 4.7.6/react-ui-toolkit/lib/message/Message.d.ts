import { FlxIconProps } from '../icon/Icon';
import { ReactNode, ComponentPropsWithRef, ReactElement } from '../../../../../../node_modules/react';

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
export declare const FlxMessage: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxMessageProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const MemoFlxMessage: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxMessageProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
declare const _default: {
    FlxMessage: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxMessageProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    MemoFlxMessage: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxMessageProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
};
export default _default;
