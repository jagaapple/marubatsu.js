// =============================================================================================================================
// SRC - OPERATORS - INCLUDES
// =============================================================================================================================
import { includes as checkIncludes } from "@checkers/index";

export const includes = (expectedValue: number | string) => (value: any) => checkIncludes(value, expectedValue.toString());
