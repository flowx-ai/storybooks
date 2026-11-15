/** Splits `dd/MM/yyyy` into `['dd', '/', 'MM', '/', 'yyyy']`. */
export declare const getPatternParts: (pattern: string) => string[];
/**
 * Keeps typed text on the typing pattern: digits only, separators inserted
 * automatically, day 1 to 31 and month 1 to 12 checked per segment, digits that
 * do not fit the segment dropped. Letters and extra digits are dropped too, so
 * pasted text goes through the same filter.
 */
export declare const maskDateInput: (text: string, pattern: string) => string;
/** Drops the separator the mask keeps appending, so a backspace can delete it. */
export declare const dropTrailingSeparator: (text: string) => string;
/**
 * Strict parse of typed text: the date must exist and must be written the way
 * the pattern writes it, which rejects `31/02/2026`. A 2-digit year is completed
 * to the 2000s first. Returns `null` for empty and for invalid text, which the
 * caller treats the same way.
 */
export declare const parseTypedDate: (text: string, pattern: string) => Date | null;
