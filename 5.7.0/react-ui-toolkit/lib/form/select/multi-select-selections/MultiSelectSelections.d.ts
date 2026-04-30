import { ComponentPropsWithoutRef, ReactElement } from '../../../../../../../../node_modules/react';
import { Option } from '../Select';
export interface FlxMultiSelectSelectionsProps<T> extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
    options: Option<T>[];
    placeholder?: string;
    maxRows?: number;
    children?: ((option: Option<T>) => ReactElement) | null;
}
export declare const FlxMultiSelectSelections: <T>({ options, placeholder, className, maxRows, style, children: renderCustomSelection, ...props }: FlxMultiSelectSelectionsProps<T>) => import("react/jsx-runtime").JSX.Element;
export declare const MemoFlxMultiSelectSelections: <T>(props: FlxMultiSelectSelectionsProps<T>) => JSX.Element;
declare const _default: {
    FlxMultiSelectSelections: <T>({ options, placeholder, className, maxRows, style, children: renderCustomSelection, ...props }: FlxMultiSelectSelectionsProps<T>) => import("react/jsx-runtime").JSX.Element;
    MemoFlxMultiSelectSelections: <T>(props: FlxMultiSelectSelectionsProps<T>) => JSX.Element;
};
export default _default;
