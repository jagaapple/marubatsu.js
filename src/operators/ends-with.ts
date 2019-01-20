// =============================================================================================================================
// SRC - OPERATORS - ENDS WITH
// =============================================================================================================================
import { endsWith as checkToEndsWith } from "@checkers/index";

export const endsWith = (expectedValue: number | string) => (value: any) => checkToEndsWith(value, expectedValue.toString());
