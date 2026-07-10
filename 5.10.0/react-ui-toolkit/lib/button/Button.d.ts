import { useRender } from '@base-ui/react/use-render';
export declare const ButtonVariants: readonly ["fill", "ghost", "text"];
export type ButtonVariant = (typeof ButtonVariants)[number];
export declare const DefaultButtonVariant: ButtonVariant;
export declare const IconPositions: readonly ["center", "left", "right"];
export type IconPosition = '' | (typeof IconPositions)[number];
export declare const DefaultIconPosition: IconPosition;
export interface FlxButtonProps extends useRender.ComponentProps<'button'> {
    variant?: ButtonVariant;
    icon?: IconPosition;
    asChild?: boolean;
    iconComponent?: React.ReactNode;
}
declare const FlxButton: {
    ({ render, className, iconComponent, children, variant, icon, ref, ...props }: FlxButtonProps & {
        ref?: React.Ref<HTMLButtonElement>;
    }): import('../../../../../../node_modules/react').ReactElement<unknown, string | import('../../../../../../node_modules/react').JSXElementConstructor<any>>;
    displayName: string;
};
declare const MemoFlxButton: import('../../../../../../node_modules/react').MemoExoticComponent<{
    ({ render, className, iconComponent, children, variant, icon, ref, ...props }: FlxButtonProps & {
        ref?: React.Ref<HTMLButtonElement>;
    }): import('../../../../../../node_modules/react').ReactElement<unknown, string | import('../../../../../../node_modules/react').JSXElementConstructor<any>>;
    displayName: string;
}>;
export { FlxButton, MemoFlxButton };
declare const _default: {
    FlxButton: {
        ({ render, className, iconComponent, children, variant, icon, ref, ...props }: FlxButtonProps & {
            ref?: React.Ref<HTMLButtonElement>;
        }): import('../../../../../../node_modules/react').ReactElement<unknown, string | import('../../../../../../node_modules/react').JSXElementConstructor<any>>;
        displayName: string;
    };
    MemoFlxButton: import('../../../../../../node_modules/react').MemoExoticComponent<{
        ({ render, className, iconComponent, children, variant, icon, ref, ...props }: FlxButtonProps & {
            ref?: React.Ref<HTMLButtonElement>;
        }): import('../../../../../../node_modules/react').ReactElement<unknown, string | import('../../../../../../node_modules/react').JSXElementConstructor<any>>;
        displayName: string;
    }>;
};
export default _default;
