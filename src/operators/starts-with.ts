// =============================================================================================================================
// SRC - OPERATORS - STARTS WITH
// =============================================================================================================================
import { startsWith as checkToStartsWith } from "@checkers/index";

export const startsWith = (expectedValue: number | string) => (value: any) =>
  checkToStartsWith(value, expectedValue.toString());
