import { ComponentPropsWithRef, ElementType } from '../../../../../../../node_modules/react';
import { Collapsible } from '@base-ui/react/collapsible';
import { FlxIconProps } from '../../icon/Icon';
export interface FlxAccordionItemProps extends Omit<Collapsible.Root.Props, 'onOpenChange'> {
    onOpenChange?: (open: boolean) => void;
    completed?: boolean;
    alwaysOpened?: boolean;
    disabled?: boolean;
}
declare const FlxAccordionItem: {
    ({ children, completed, disabled, open, defaultOpen, alwaysOpened, onOpenChange, className, ref, ...props }: FlxAccordionItemProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const MemoFlxAccordionItem: import('../../../../../../../node_modules/react').MemoExoticComponent<{
    ({ children, completed, disabled, open, defaultOpen, alwaysOpened, onOpenChange, className, ref, ...props }: FlxAccordionItemProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}>;
declare const FlxAccordionItemHeader: {
    ({ children, ref, ...props }: ComponentPropsWithRef<"div"> & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const MemoFlxAccordionItemHeader: import('../../../../../../../node_modules/react').MemoExoticComponent<{
    ({ children, ref, ...props }: ComponentPropsWithRef<"div"> & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}>;
export interface FlxAccordionItemTitleProps extends Collapsible.Trigger.Props {
    completedIcon?: ElementType<FlxIconProps>;
    caretIcon?: ElementType<FlxIconProps>;
}
declare const FlxAccordionItemTitle: {
    ({ children, completedIcon: CompletedIcon, caretIcon: CaretIcon, ref, ...props }: FlxAccordionItemTitleProps & {
        ref?: React.Ref<HTMLButtonElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const MemoFlxAccordionItemTitle: import('../../../../../../../node_modules/react').MemoExoticComponent<{
    ({ children, completedIcon: CompletedIcon, caretIcon: CaretIcon, ref, ...props }: FlxAccordionItemTitleProps & {
        ref?: React.Ref<HTMLButtonElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}>;
declare const FlxAccordionItemSubtitle: {
    ({ alwaysDisplay, ref, ...props }: ComponentPropsWithRef<"p"> & {
        alwaysDisplay?: boolean;
    } & {
        ref?: React.Ref<HTMLParagraphElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const MemoFlxAccordionItemSubtitle: import('../../../../../../../node_modules/react').MemoExoticComponent<{
    ({ alwaysDisplay, ref, ...props }: ComponentPropsWithRef<"p"> & {
        alwaysDisplay?: boolean;
    } & {
        ref?: React.Ref<HTMLParagraphElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}>;
declare const FlxAccordionItemContent: {
    ({ children, className, ref, ...props }: Collapsible.Panel.Props & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const MemoFlxAccordionItemContent: import('../../../../../../../node_modules/react').MemoExoticComponent<{
    ({ children, className, ref, ...props }: Collapsible.Panel.Props & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}>;
export { FlxAccordionItem, FlxAccordionItemHeader, FlxAccordionItemTitle, FlxAccordionItemSubtitle, FlxAccordionItemContent, MemoFlxAccordionItem, MemoFlxAccordionItemHeader, MemoFlxAccordionItemTitle, MemoFlxAccordionItemSubtitle, MemoFlxAccordionItemContent, };
declare const _default: {
    FlxAccordionItem: {
        ({ children, completed, disabled, open, defaultOpen, alwaysOpened, onOpenChange, className, ref, ...props }: FlxAccordionItemProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    FlxAccordionItemHeader: {
        ({ children, ref, ...props }: ComponentPropsWithRef<"div"> & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    FlxAccordionItemTitle: {
        ({ children, completedIcon: CompletedIcon, caretIcon: CaretIcon, ref, ...props }: FlxAccordionItemTitleProps & {
            ref?: React.Ref<HTMLButtonElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    FlxAccordionItemSubtitle: {
        ({ alwaysDisplay, ref, ...props }: ComponentPropsWithRef<"p"> & {
            alwaysDisplay?: boolean;
        } & {
            ref?: React.Ref<HTMLParagraphElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    FlxAccordionItemContent: {
        ({ children, className, ref, ...props }: Collapsible.Panel.Props & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    MemoFlxAccordionItem: import('../../../../../../../node_modules/react').MemoExoticComponent<{
        ({ children, completed, disabled, open, defaultOpen, alwaysOpened, onOpenChange, className, ref, ...props }: FlxAccordionItemProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    }>;
    MemoFlxAccordionItemHeader: import('../../../../../../../node_modules/react').MemoExoticComponent<{
        ({ children, ref, ...props }: ComponentPropsWithRef<"div"> & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    }>;
    MemoFlxAccordionItemTitle: import('../../../../../../../node_modules/react').MemoExoticComponent<{
        ({ children, completedIcon: CompletedIcon, caretIcon: CaretIcon, ref, ...props }: FlxAccordionItemTitleProps & {
            ref?: React.Ref<HTMLButtonElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    }>;
    MemoFlxAccordionItemSubtitle: import('../../../../../../../node_modules/react').MemoExoticComponent<{
        ({ alwaysDisplay, ref, ...props }: ComponentPropsWithRef<"p"> & {
            alwaysDisplay?: boolean;
        } & {
            ref?: React.Ref<HTMLParagraphElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    }>;
    MemoFlxAccordionItemContent: import('../../../../../../../node_modules/react').MemoExoticComponent<{
        ({ children, className, ref, ...props }: Collapsible.Panel.Props & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    }>;
};
export default _default;
