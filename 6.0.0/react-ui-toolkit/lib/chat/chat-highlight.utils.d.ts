import { ReactNode } from '../../../../../../node_modules/react';
/**
 * Wraps every case-insensitive occurrence of `highlight` inside `text` in a
 * <strong> element. Returns the plain text when there is nothing to highlight.
 */
export declare const highlightMatches: (text: string, highlight?: string) => ReactNode;
