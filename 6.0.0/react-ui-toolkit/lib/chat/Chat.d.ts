import { ComponentPropsWithRef, ReactNode } from '../../../../../../node_modules/react';
export interface ChatProps extends ComponentPropsWithRef<'div'> {
    children?: ReactNode;
}
declare const FlxChat: {
    ({ children, className, ref, ...props }: ChatProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import('../../../../../../node_modules/react').JSX.Element;
    displayName: string;
};
declare const MemoFlxChat: import('../../../../../../node_modules/react').MemoExoticComponent<{
    ({ children, className, ref, ...props }: ChatProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import('../../../../../../node_modules/react').JSX.Element;
    displayName: string;
}>;
export { MemoFlxChat, FlxChat };
declare const _default: {
    MemoFlxChat: import('../../../../../../node_modules/react').MemoExoticComponent<{
        ({ children, className, ref, ...props }: ChatProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import('../../../../../../node_modules/react').JSX.Element;
        displayName: string;
    }>;
    FlxChat: {
        ({ children, className, ref, ...props }: ChatProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import('../../../../../../node_modules/react').JSX.Element;
        displayName: string;
    };
};
export default _default;
