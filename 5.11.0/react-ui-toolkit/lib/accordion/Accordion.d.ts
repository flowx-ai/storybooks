import { ComponentPropsWithRef } from '../../../../../../node_modules/react';
declare const FlxAccordion: {
    ({ children, className, ref, ...props }: ComponentPropsWithRef<"div"> & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react").JSX.Element;
    displayName: string;
};
declare const MemoFlxAccordion: import('../../../../../../node_modules/react').MemoExoticComponent<{
    ({ children, className, ref, ...props }: ComponentPropsWithRef<"div"> & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react").JSX.Element;
    displayName: string;
}>;
export * from './accordion-item/AccordionItem';
declare const _default: {
    FlxAccordion: {
        ({ children, className, ref, ...props }: ComponentPropsWithRef<"div"> & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react").JSX.Element;
        displayName: string;
    };
    MemoFlxAccordion: import('../../../../../../node_modules/react').MemoExoticComponent<{
        ({ children, className, ref, ...props }: ComponentPropsWithRef<"div"> & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react").JSX.Element;
        displayName: string;
    }>;
};
export default _default;
export { FlxAccordion, MemoFlxAccordion };
