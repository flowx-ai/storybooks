export type FlxAccordionItemContextValue = {
    opened?: boolean;
    alwaysOpened?: boolean;
    disabled?: boolean;
    completed?: boolean;
    openToggle?: () => void;
};
export declare const FlxAccordionItemContext: import('../../../../../../node_modules/react').Context<FlxAccordionItemContextValue>;
export declare function useFlxAccordionItemContext(): FlxAccordionItemContextValue;
