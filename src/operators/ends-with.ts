// =============================================================================================================================
// SRC - OPERATORS - ENDS WITH
// =============================================================================================================================
import { endsWith as checkEndsWith } from "@checkers/index";

export const endsWith = (expectedValue: number | string) => (value: any) => checkEndsWith(value, expectedValue.toString());
