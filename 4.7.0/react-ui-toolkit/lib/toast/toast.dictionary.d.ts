import { ToastType } from '@flowx/core-sdk';

export declare const DEFAULT_DISPLAY_TYPE = "fill";
export declare const DEFAULT_POSITION = "bottom-center";
export declare const MINIMUM_CLOSE_INTERVAL = 2000;
export declare const MINIMUM_CLOSE_INTERVAL_BY_TYPE: ((type: ToastType) => any) & import('lodash').MemoizedFunction;
export declare const MAXIMUM_CLOSE_INTERVAL = 10000;
export declare const CLOSE_INTERVAL_CHECK = 100;
export declare const CHARACTER_TIMER = 50;
