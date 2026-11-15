import { ComponentPropsWithRef } from '../../../../../../node_modules/react';
export interface ChatReasoningProps extends ComponentPropsWithRef<'div'> {
    message?: string;
    thinkingText?: string;
    avatar?: {
        src: string;
        alt: string;
    };
    dataTestId?: string;
}
declare const FlxChatReasoning: {
    ({ message, avatar, className, dataTestId, ref, ...props }: ChatReasoningProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import('../../../../../../node_modules/react').JSX.Element;
    displayName: string;
};
declare const MemoFlxChatReasoning: import('../../../../../../node_modules/react').MemoExoticComponent<{
    ({ message, avatar, className, dataTestId, ref, ...props }: ChatReasoningProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import('../../../../../../node_modules/react').JSX.Element;
    displayName: string;
}>;
export { MemoFlxChatReasoning, FlxChatReasoning };
declare const _default: {
    MemoFlxChatReasoning: import('../../../../../../node_modules/react').MemoExoticComponent<{
        ({ message, avatar, className, dataTestId, ref, ...props }: ChatReasoningProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import('../../../../../../node_modules/react').JSX.Element;
        displayName: string;
    }>;
    FlxChatReasoning: {
        ({ message, avatar, className, dataTestId, ref, ...props }: ChatReasoningProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import('../../../../../../node_modules/react').JSX.Element;
        displayName: string;
    };
};
export default _default;
