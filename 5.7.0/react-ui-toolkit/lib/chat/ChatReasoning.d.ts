import { ComponentPropsWithRef } from '../../../../../../node_modules/react';
export interface ChatReasoningProps extends ComponentPropsWithRef<'div'> {
    message?: string;
    thinkingText?: string;
    avatar?: {
        src: string;
        alt: string;
    };
}
declare const FlxChatReasoning: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatReasoningProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
declare const MemoFlxChatReasoning: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatReasoningProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
export { MemoFlxChatReasoning, FlxChatReasoning };
declare const _default: {
    MemoFlxChatReasoning: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatReasoningProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
    FlxChatReasoning: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ChatReasoningProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
};
export default _default;
