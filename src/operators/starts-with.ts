// =============================================================================================================================
// SRC - OPERATORS - STARTS WITH
// =============================================================================================================================
import { startsWith as checkStartsWith } from "@checkers/index";

export const startsWith = (expectedValue: number | string) => (value: any) => checkStartsWith(value, expectedValue.toString());
