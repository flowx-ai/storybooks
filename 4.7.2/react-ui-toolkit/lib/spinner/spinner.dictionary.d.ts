export type spinnerType = 'indeterminate' | 'determinate';
export type spinnerVisualType = 'default' | 'custom';
export type spinnerSize = 'small' | 'big' | 'custom';
export type spinnerColor = 'primary' | 'secondary' | 'error';
export declare const DEFAULT_TYPE = "indeterminate";
export declare const DEFAULT_VISUAL_TYPE = "default";
export declare const DEFAULT_SIZE = "big";
export declare const DEFAULT_COLOR = "primary";
export declare const SIZE: {
    small: {
        radius: number;
        border: number;
    };
    big: {
        radius: number;
        border: number;
    };
};
