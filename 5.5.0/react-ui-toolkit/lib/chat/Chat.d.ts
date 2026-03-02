import { ComponentPropsWithRef, ReactNode } from '../../../../../../node_modules/react';
export interface ChatProps extends ComponentPropsWithRef<'div'> {
    children?: ReactNode;
}
declare const FlxChat: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
declare const MemoFlxChat: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
export { MemoFlxChat, FlxChat };
declare const _default: {
    MemoFlxChat: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
    FlxChat: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
};
export default _default;
