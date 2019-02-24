// =============================================================================================================================
// SRC - CHECKERS - EQUAL DIGITS CHECKER
// =============================================================================================================================
import { CheckResult } from "./shared";

type Result = CheckResult<number, number | "not-number">;
export const hasDigits = (value: any, expectedNumberOfDigits: number): Result => {
  const result: Result = {
    isPassed: false,
    expected: expectedNumberOfDigits,
    actual: "not-number",
  };

  if (typeof value !== "number") return result;

  if (value === Number.POSITIVE_INFINITY) return result;
  if (value === Number.NEGATIVE_INFINITY) return result;

  const numberOfDigits = `${value}`.replace(/[\-\.]/g, "").length;
  result.isPassed = numberOfDigits === expectedNumberOfDigits;
  result.actual = numberOfDigits;

  return result;
};
