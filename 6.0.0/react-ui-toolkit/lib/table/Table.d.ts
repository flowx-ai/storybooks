import { ComponentPropsWithRef } from '../../../../../../node_modules/react';
import { AgGridReactProps } from 'ag-grid-react';
export interface FlxTableProps extends ComponentPropsWithRef<'div'> {
    gridOptions?: AgGridReactProps['gridOptions'];
    rowData: AgGridReactProps['rowData'];
    columnDefs?: AgGridReactProps['columnDefs'];
    containerStyle?: AgGridReactProps['containerStyle'];
    pagination?: AgGridReactProps['pagination'];
    suppressCellFocus?: AgGridReactProps['suppressCellFocus'];
    paginationPageSizeSelector?: AgGridReactProps['paginationPageSizeSelector'];
    onPaginationChanged?: AgGridReactProps['onPaginationChanged'];
    paginationPageSize?: AgGridReactProps['paginationPageSize'];
    onFilterChanged?: AgGridReactProps['onFilterChanged'];
    onSortChanged?: AgGridReactProps['onSortChanged'];
    onGridReady?: AgGridReactProps['onGridReady'];
    onRowClicked?: AgGridReactProps['onRowClicked'];
    onSelectionChanged?: AgGridReactProps['onSelectionChanged'];
    loading?: boolean;
    selection?: AgGridReactProps['rowSelection'];
    isServerSide?: boolean;
    totalNumberOfRows?: number;
}
export declare const DEFAULT_PAGE_SIZE = 10;
export declare const FlxTable: {
    ({ className, gridOptions, rowData: _rowData, columnDefs, pagination, suppressCellFocus, paginationPageSizeSelector, onPaginationChanged, paginationPageSize: _paginationPageSize, onFilterChanged, onSortChanged, onGridReady, onRowClicked, onSelectionChanged, loading, selection, isServerSide, totalNumberOfRows, containerStyle, ref, ...props }: FlxTableProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import('../../../../../../node_modules/react').JSX.Element;
    displayName: string;
};
export declare const MemoFlxTable: import('../../../../../../node_modules/react').MemoExoticComponent<{
    ({ className, gridOptions, rowData: _rowData, columnDefs, pagination, suppressCellFocus, paginationPageSizeSelector, onPaginationChanged, paginationPageSize: _paginationPageSize, onFilterChanged, onSortChanged, onGridReady, onRowClicked, onSelectionChanged, loading, selection, isServerSide, totalNumberOfRows, containerStyle, ref, ...props }: FlxTableProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import('../../../../../../node_modules/react').JSX.Element;
    displayName: string;
}>;
declare const _default: {
    FlxTable: {
        ({ className, gridOptions, rowData: _rowData, columnDefs, pagination, suppressCellFocus, paginationPageSizeSelector, onPaginationChanged, paginationPageSize: _paginationPageSize, onFilterChanged, onSortChanged, onGridReady, onRowClicked, onSelectionChanged, loading, selection, isServerSide, totalNumberOfRows, containerStyle, ref, ...props }: FlxTableProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import('../../../../../../node_modules/react').JSX.Element;
        displayName: string;
    };
    MemoFlxTable: import('../../../../../../node_modules/react').MemoExoticComponent<{
        ({ className, gridOptions, rowData: _rowData, columnDefs, pagination, suppressCellFocus, paginationPageSizeSelector, onPaginationChanged, paginationPageSize: _paginationPageSize, onFilterChanged, onSortChanged, onGridReady, onRowClicked, onSelectionChanged, loading, selection, isServerSide, totalNumberOfRows, containerStyle, ref, ...props }: FlxTableProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import('../../../../../../node_modules/react').JSX.Element;
        displayName: string;
    }>;
};
export default _default;
