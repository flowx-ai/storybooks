import { ComponentPropsWithRef, ElementType } from '../../../../../../../node_modules/react';
import { FlxIconProps } from '../../icon/Icon';
export interface FlxAccordionItemProps extends ComponentPropsWithRef<'div'> {
    completed?: boolean;
    opened?: boolean;
    defaultOpened?: boolean;
    alwaysOpened?: boolean;
    disabled?: boolean;
    openToggle?: (value: boolean) => void;
}
declare const FlxAccordionItem: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxAccordionItemProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
declare const MemoFlxAccordionItem: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxAccordionItemProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
declare const FlxAccordionItemHeader: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<Omit<import('../../../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void | import('../../../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
}, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
declare const MemoFlxAccordionItemHeader: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<Omit<import('../../../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void | import('../../../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
}, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
export interface FlxAccordionItemTitleProps extends ComponentPropsWithRef<'div'> {
    completedIcon?: ElementType<FlxIconProps>;
    caretIcon?: ElementType<FlxIconProps>;
}
declare const FlxAccordionItemTitle: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxAccordionItemTitleProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
declare const MemoFlxAccordionItemTitle: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxAccordionItemTitleProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
declare const FlxAccordionItemSubtitle: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<Omit<import('../../../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../../../node_modules/react').HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> & {
    ref?: ((instance: HTMLParagraphElement | null) => void | import('../../../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../../../../node_modules/react').RefObject<HTMLParagraphElement> | null | undefined;
} & {
    alwaysDisplay?: boolean;
}, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLParagraphElement>>;
declare const MemoFlxAccordionItemSubtitle: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<Omit<import('../../../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../../../node_modules/react').HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> & {
    ref?: ((instance: HTMLParagraphElement | null) => void | import('../../../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../../../../node_modules/react').RefObject<HTMLParagraphElement> | null | undefined;
} & {
    alwaysDisplay?: boolean;
}, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLParagraphElement>>>;
export interface FlxAccordionItemContentProps extends ComponentPropsWithRef<'div'> {
    spacing?: string;
}
declare const FlxAccordionItemContent: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxAccordionItemContentProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
declare const MemoFlxAccordionItemContent: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxAccordionItemContentProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
export { FlxAccordionItem, FlxAccordionItemHeader, FlxAccordionItemTitle, FlxAccordionItemSubtitle, FlxAccordionItemContent, MemoFlxAccordionItem, MemoFlxAccordionItemHeader, MemoFlxAccordionItemTitle, MemoFlxAccordionItemSubtitle, MemoFlxAccordionItemContent, };
declare const _default: {
    FlxAccordionItem: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxAccordionItemProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    FlxAccordionItemHeader: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<Omit<import('../../../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void | import('../../../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
    }, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    FlxAccordionItemTitle: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxAccordionItemTitleProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    FlxAccordionItemSubtitle: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<Omit<import('../../../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../../../node_modules/react').HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> & {
        ref?: ((instance: HTMLParagraphElement | null) => void | import('../../../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../../../../node_modules/react').RefObject<HTMLParagraphElement> | null | undefined;
    } & {
        alwaysDisplay?: boolean;
    }, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLParagraphElement>>;
    FlxAccordionItemContent: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxAccordionItemContentProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    MemoFlxAccordionItem: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxAccordionItemProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
    MemoFlxAccordionItemHeader: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<Omit<import('../../../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void | import('../../../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
    }, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
    MemoFlxAccordionItemTitle: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxAccordionItemTitleProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
    MemoFlxAccordionItemSubtitle: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<Omit<import('../../../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../../../node_modules/react').HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> & {
        ref?: ((instance: HTMLParagraphElement | null) => void | import('../../../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../../../../node_modules/react').RefObject<HTMLParagraphElement> | null | undefined;
    } & {
        alwaysDisplay?: boolean;
    }, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLParagraphElement>>>;
    MemoFlxAccordionItemContent: import('../../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxAccordionItemContentProps, "ref"> & import('../../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
};
export default _default;
