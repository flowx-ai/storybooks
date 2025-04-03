import { FlxIconProps } from '../icon/Icon';
import { CSSProperties, ReactElement } from '../../../../../../node_modules/react';

export interface FlxDocumentViewerProps {
    dataUniqueid: string;
    dataTestId: string;
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
}
declare const FlxDocumentViewer: import('../../../../../../node_modules/react').ForwardRefExoticComponent<FlxDocumentViewerProps & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
declare const MemoFlxDocumentViewer: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<FlxDocumentViewerProps & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
export { FlxDocumentViewer, MemoFlxDocumentViewer };
declare const _default: {
    FlxDocumentViewer: import('../../../../../../node_modules/react').ForwardRefExoticComponent<FlxDocumentViewerProps & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    MemoFlxDocumentViewer: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<FlxDocumentViewerProps & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
};
export default _default;
