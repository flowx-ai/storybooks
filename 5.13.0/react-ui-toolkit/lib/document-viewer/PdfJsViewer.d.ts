import { FC } from '../../../../../../node_modules/react';
type PdfJsTheme = 'light' | 'dark' | 'auto';
export interface DocumentScrollEvent {
    page: number;
    scrollTop: number;
    scrollPercentage: number;
    atEnd: boolean;
}
interface PdfJsViewerProps {
    viewerId?: string;
    viewerFolder?: string;
    externalWindow?: boolean;
    target?: string;
    showSpinner?: boolean;
    downloadFileName?: string;
    openFile?: boolean;
    download?: boolean;
    startDownload?: boolean;
    viewBookmark?: boolean;
    print?: boolean;
    startPrint?: boolean;
    fullScreen?: boolean;
    find?: boolean;
    /**
     * Annotation-editor buttons (highlight / free text / draw / image), new in PDF.js 6 and shown by
     * default. Off here so the toolbar keeps the button set of the PDF.js 2.x bundle we used before.
     */
    showAnnotations?: boolean;
    theme?: PdfJsTheme;
    /** Replaces the default viewer CSS — include `color-scheme` yourself when overriding it. */
    customCSS?: string;
    zoom?: string;
    nameddest?: string;
    pagemode?: string;
    lastPage?: boolean;
    rotatecw?: boolean;
    rotateccw?: boolean;
    cursor?: string;
    scroll?: string;
    spread?: string;
    locale?: string;
    useOnlyCssZoom?: boolean;
    diagnosticLogs?: boolean;
    externalWindowOptions?: string;
    onBeforePrint?: () => void;
    onAfterPrint?: () => void;
    onDocumentLoad?: (param: any) => void;
    onPageChange?: (param: any) => void;
    onScroll?: (e: DocumentScrollEvent) => void;
    onScrollEnd?: () => void;
    pdfSrc?: string | Blob | Uint8Array | null;
    page?: number;
}
export declare const PdfJsViewer: FC<PdfJsViewerProps>;
export default PdfJsViewer;
