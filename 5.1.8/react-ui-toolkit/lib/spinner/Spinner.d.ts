import { FC } from '../../../../../../node_modules/react';
import { spinnerType, spinnerVisualType, spinnerColor, spinnerSize } from './spinner.dictionary';
export interface FlxSpinnerProps {
    type?: spinnerType;
    visualType?: spinnerVisualType;
    color?: spinnerColor;
    size?: spinnerSize;
    progress?: number;
    radius?: number;
    border?: number;
    text?: string;
    backgroundColor?: string;
    borderColor?: string;
}
export declare const FlxSpinner: FC<FlxSpinnerProps>;
declare const _default: {
    MemoFlxSpinner: import('../../../../../../node_modules/react').NamedExoticComponent<FlxSpinnerProps>;
    FlxSpinner: FC<FlxSpinnerProps>;
};
export default _default;
