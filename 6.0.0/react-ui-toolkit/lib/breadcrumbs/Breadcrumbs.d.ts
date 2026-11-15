import { FlxBreadcrumbsProps } from './Breadcrumbs.types';
export declare const FlxBreadcrumbs: {
    ({ items, ariaLabel, maxVisibleItems, separator, homeElement, renderItem, onItemClick, className, ref, ...props }: FlxBreadcrumbsProps & {
        ref?: React.Ref<HTMLElement>;
    }): import('../../../../../../node_modules/react').JSX.Element;
    displayName: string;
};
export declare const MemoFlxBreadcrumbs: import('../../../../../../node_modules/react').MemoExoticComponent<{
    ({ items, ariaLabel, maxVisibleItems, separator, homeElement, renderItem, onItemClick, className, ref, ...props }: FlxBreadcrumbsProps & {
        ref?: React.Ref<HTMLElement>;
    }): import('../../../../../../node_modules/react').JSX.Element;
    displayName: string;
}>;
export * from './Breadcrumbs.types';
export { FlxBreadcrumbsItem } from './BreadcrumbsItem';
export { FlxBreadcrumbsList } from './BreadcrumbsList';
declare const _default: {
    FlxBreadcrumbs: {
        ({ items, ariaLabel, maxVisibleItems, separator, homeElement, renderItem, onItemClick, className, ref, ...props }: FlxBreadcrumbsProps & {
            ref?: React.Ref<HTMLElement>;
        }): import('../../../../../../node_modules/react').JSX.Element;
        displayName: string;
    };
    MemoFlxBreadcrumbs: import('../../../../../../node_modules/react').MemoExoticComponent<{
        ({ items, ariaLabel, maxVisibleItems, separator, homeElement, renderItem, onItemClick, className, ref, ...props }: FlxBreadcrumbsProps & {
            ref?: React.Ref<HTMLElement>;
        }): import('../../../../../../node_modules/react').JSX.Element;
        displayName: string;
    }>;
    FlxBreadcrumbsList: {
        ({ className, ref, ...props }: import('./Breadcrumbs.types').FlxBreadcrumbsListProps & {
            ref?: React.Ref<HTMLOListElement>;
        }): import('../../../../../../node_modules/react').JSX.Element;
        displayName: string;
    };
    FlxBreadcrumbsItem: {
        ({ item, index, isFirst, isLast, homeElement, separator, renderItem, onItemClick, className, ellipsisAriaLabel, ref, ...props }: import('./Breadcrumbs.types').FlxBreadcrumbsItemProps & {
            ref?: React.Ref<HTMLLIElement>;
        }): import('../../../../../../node_modules/react').JSX.Element;
        displayName: string;
    };
};
export default _default;
