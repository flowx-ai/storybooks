import { AirDatepickerPositionCallback } from 'air-datepicker';
interface FloatingPositionOptions {
    offset?: number;
    padding?: number;
}
export declare const createAirDatepickerFloatingPosition: ({ offset: gap, padding, }?: FloatingPositionOptions) => AirDatepickerPositionCallback;
export {};
