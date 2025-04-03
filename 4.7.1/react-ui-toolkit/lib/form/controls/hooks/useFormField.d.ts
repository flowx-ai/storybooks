export declare const useFormField: () => {
    label?: string;
    helperText?: string;
    hideInsideInfoPoint?: boolean;
    hasClear?: boolean;
    clearIcon?: import('../../../../../../../../node_modules/react').ReactElement<import('../../../..').FlxIconProps> | null;
    helperIcon?: import('../../../../../../../../node_modules/react').ReactElement<import('../../../..').FlxIconProps> | null;
    clearFn?: () => void;
    disabled?: boolean;
    rules?: import('react-hook-form').RegisterOptions;
    showError?: boolean;
    classNames?: {
        label?: string;
        helper?: string;
        helperTooltip?: string;
        error?: string;
    };
    id: string;
    name: string;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
};
