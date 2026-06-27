import { CSSProperties, ReactElement } from '../../../../../../node_modules/react';
import { FlxIconProps } from '../icon/Icon';
import { DocumentScrollEvent } from './PdfJsViewer';
export interface FlxDocumentViewerProps {
    dataUniqueId?: string;
    dataTestId?: string;
    title?: string;
    subTitle?: string;
    hasAccordion?: boolean;
    previewInModal?: boolean;
    isExpanded?: boolean;
    file?: string | Blob | Uint8Array | null;
    className?: string;
    style?: CSSProperties;
    loading?: boolean;
    error?: boolean;
    retry?: () => void;
    documentIcon?: ReactElement<FlxIconProps> | null;
    emptyIcon?: ReactElement<FlxIconProps> | null;
    errorIcon?: ReactElement<FlxIconProps> | null;
    reloadIcon?: ReactElement<FlxIconProps> | null;
    viewIcon?: ReactElement<FlxIconProps> | null;
    shareIcon?: ReactElement<FlxIconProps> | null;
    language?: string;
    closeIconAriaLabel?: string;
    container?: HTMLElement;
    onScroll?: (e: DocumentScrollEvent) => void;
    onScrollEnd?: () => void;
}
declare const FlxDocumentViewer: {
    ({ title, subTitle, file, hasAccordion, isExpanded, previewInModal, className, style, loading, error, retry, dataUniqueId, dataTestId, documentIcon, emptyIcon, errorIcon, reloadIcon, viewIcon, language, closeIconAriaLabel, container, onScroll, onScrollEnd, ref, }: FlxDocumentViewerProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const MemoFlxDocumentViewer: import('../../../../../../node_modules/react').MemoExoticComponent<{
    ({ title, subTitle, file, hasAccordion, isExpanded, previewInModal, className, style, loading, error, retry, dataUniqueId, dataTestId, documentIcon, emptyIcon, errorIcon, reloadIcon, viewIcon, language, closeIconAriaLabel, container, onScroll, onScrollEnd, ref, }: FlxDocumentViewerProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}>;
export type { DocumentScrollEvent };
export { FlxDocumentViewer, MemoFlxDocumentViewer };
declare const _default: {
    FlxDocumentViewer: {
        ({ title, subTitle, file, hasAccordion, isExpanded, previewInModal, className, style, loading, error, retry, dataUniqueId, dataTestId, documentIcon, emptyIcon, errorIcon, reloadIcon, viewIcon, language, closeIconAriaLabel, container, onScroll, onScrollEnd, ref, }: FlxDocumentViewerProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    MemoFlxDocumentViewer: import('../../../../../../node_modules/react').MemoExoticComponent<{
        ({ title, subTitle, file, hasAccordion, isExpanded, previewInModal, className, style, loading, error, retry, dataUniqueId, dataTestId, documentIcon, emptyIcon, errorIcon, reloadIcon, viewIcon, language, closeIconAriaLabel, container, onScroll, onScrollEnd, ref, }: FlxDocumentViewerProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    }>;
};
export default _default;
