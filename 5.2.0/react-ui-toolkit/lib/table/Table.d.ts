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
export declare const FlxTable: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxTableProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const MemoFlxTable: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxTableProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
declare const _default: {
    FlxTable: import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxTableProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    MemoFlxTable: import('../../../../../../node_modules/react').MemoExoticComponent<import('../../../../../../node_modules/react').ForwardRefExoticComponent<Omit<FlxTableProps, "ref"> & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>>;
};
export default _default;
