import { FC } from '../../../../../../node_modules/react';
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
    /**
     * No-ops on PDF.js 6: the <= 20 viewer took these as query params, but ng2-pdfjs-viewer 26 renders
     * load failures host-side instead. Kept so existing call sites keep compiling.
     */
    errorOverride?: boolean;
    errorAppend?: boolean;
    errorMessage?: string;
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
