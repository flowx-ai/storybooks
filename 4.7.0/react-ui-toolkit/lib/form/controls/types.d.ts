import { Control, FieldValues, Path } from 'react-hook-form';

export interface FormFieldProps<TFieldValues extends FieldValues> {
    name: Path<TFieldValues>;
    control: Control<TFieldValues>;
    rules?: Record<string, string>;
}
