import { ComponentPropsWithoutRef, ReactNode } from '../../../../../../node_modules/react';
export interface FlxBreadcrumbItem {
    label: string;
    onClick?: (item: FlxBreadcrumbItem, index: number) => void;
    [key: string]: unknown;
}
export interface BreadcrumbRenderContext {
    index: number;
    isFirst: boolean;
    isLast: boolean;
}
export interface FlxBreadcrumbsProps extends ComponentPropsWithoutRef<'nav'> {
    items: FlxBreadcrumbItem[];
    ariaLabel?: string;
    maxVisibleItems?: number | null;
    separator?: ReactNode;
    homeElement?: ReactNode;
    renderItem?: (item: FlxBreadcrumbItem, context: BreadcrumbRenderContext) => ReactNode;
    onItemClick?: (item: FlxBreadcrumbItem, index: number) => void;
}
export interface VisibleBreadcrumbItem extends FlxBreadcrumbItem {
    isEllipsis?: boolean;
    originalIndex?: number;
}
export type FlxBreadcrumbsListProps = ComponentPropsWithoutRef<'ol'>;
export interface FlxBreadcrumbsItemProps extends ComponentPropsWithoutRef<'li'> {
    item: FlxBreadcrumbItem & {
        isEllipsis?: boolean;
        originalIndex?: number;
    };
    index: number;
    isFirst: boolean;
    isLast: boolean;
    homeElement: ReactNode;
    ellipsisAriaLabel?: string;
    separator: ReactNode;
    renderItem?: (item: FlxBreadcrumbItem, context: BreadcrumbRenderContext) => ReactNode;
    onItemClick?: (item: FlxBreadcrumbItem, index: number) => void;
}
