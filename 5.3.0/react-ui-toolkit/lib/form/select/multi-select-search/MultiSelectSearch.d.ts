import { FC, ComponentPropsWithRef, ReactElement } from '../../../../../../../../node_modules/react';
import { FlxIconProps } from '../../../icon/Icon';
export interface FlxMultiSelectSearchProps extends ComponentPropsWithRef<'div'> {
    className?: string;
    searchText: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    selectedIcon?: ReactElement<FlxIconProps> | null;
    unselectedIcon?: ReactElement<FlxIconProps> | null;
    indeterminateIcon?: ReactElement<FlxIconProps> | null;
    toggleAll: () => void;
    isAllSelected: boolean;
    isIndeterminate?: boolean;
    hideToggleAll?: boolean;
}
export declare const FlxMultiSelectSearch: FC<FlxMultiSelectSearchProps>;
export declare const MemoFlxMultiSelectSearch: import('../../../../../../../../node_modules/react').NamedExoticComponent<FlxMultiSelectSearchProps>;
declare const _default: {
    FlxMultiSelectSearch: FC<FlxMultiSelectSearchProps>;
    MemoFlxMultiSelectSearch: import('../../../../../../../../node_modules/react').NamedExoticComponent<FlxMultiSelectSearchProps>;
};
export default _default;
