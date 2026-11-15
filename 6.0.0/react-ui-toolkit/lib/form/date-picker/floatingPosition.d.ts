import { Placement } from '@floating-ui/dom';
import { AirDatepickerPositionCallback } from 'air-datepicker';
interface FloatingPositionOptions {
    offset?: number;
    padding?: number;
    placement?: Placement;
}
export declare const createAirDatepickerFloatingPosition: ({ offset: gap, padding, placement, }?: FloatingPositionOptions) => AirDatepickerPositionCallback;
export {};
