// =============================================================================================================================
// SRC - OPERATORS - PATTERN
// =============================================================================================================================
import { isConformingRegExp } from "@checkers/index";

export const pattern = (regexp: RegExp) => (value: any) => isConformingRegExp(value, regexp);
