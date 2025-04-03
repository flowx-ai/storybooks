import { ErrorDisplayType } from '../error/FormError';
import { FieldError } from 'react-hook-form';
import { ReactNode } from '../../../../../../../node_modules/react';

export declare const FlxFormContent: ({ children, error, errorDisplayType, }: {
    children: ReactNode;
    error?: FieldError;
    errorDisplayType?: ErrorDisplayType;
}) => import("react/jsx-runtime").JSX.Element;
