import { useRender } from '@base-ui-components/react/use-render';
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
declare const FlxButton: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxButtonProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
declare const MemoFlxButton: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxButtonProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>>;
export { FlxButton, MemoFlxButton };
declare const _default: {
    FlxButton: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxButtonProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
    MemoFlxButton: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxButtonProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>>;
};
export default _default;
