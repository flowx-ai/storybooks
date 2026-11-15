import { ReactNode } from '../../../../../../../../node_modules/react';
export interface FlxSelectOptionProps extends React.HTMLAttributes<HTMLDivElement> {
    isSelected?: boolean;
    disabled?: boolean;
    label: ReactNode;
    className?: string;
    isFocused?: boolean;
}
export declare const FlxSelectOption: {
    ({ isSelected, label, onClick, disabled, className, isFocused, ref, ...props }: FlxSelectOptionProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import('../../../../../../../../node_modules/react').JSX.Element;
    displayName: string;
};
export declare const MemoFlxSelectOption: import('../../../../../../../../node_modules/react').MemoExoticComponent<{
    ({ isSelected, label, onClick, disabled, className, isFocused, ref, ...props }: FlxSelectOptionProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import('../../../../../../../../node_modules/react').JSX.Element;
    displayName: string;
}>;
declare const _default: {
    FlxSelectOption: {
        ({ isSelected, label, onClick, disabled, className, isFocused, ref, ...props }: FlxSelectOptionProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import('../../../../../../../../node_modules/react').JSX.Element;
        displayName: string;
    };
    MemoFlxSelectOption: import('../../../../../../../../node_modules/react').MemoExoticComponent<{
        ({ isSelected, label, onClick, disabled, className, isFocused, ref, ...props }: FlxSelectOptionProps & {
            ref?: React.Ref<HTMLDivElement>;
        }): import('../../../../../../../../node_modules/react').JSX.Element;
        displayName: string;
    }>;
};
export default _default;
