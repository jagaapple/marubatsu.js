// =============================================================================================================================
// SRC - CHECKERS - WITHIN DIGITS RANGE CHECKER
// =============================================================================================================================
import { CheckResult } from "./shared";

type Result = CheckResult<[number, number]>;
export const isWithinDigitsRange = (value: any, expectedNumberOfDigits: [number | undefined, number | undefined]): Result => {
  const result: Result = {
    isPassed: false,
    expected: [expectedNumberOfDigits[0] || Number.NEGATIVE_INFINITY, expectedNumberOfDigits[1] || Number.POSITIVE_INFINITY],
    actual: value,
  };

  if (typeof value !== "number") return result;

  if (value === Number.POSITIVE_INFINITY) return result;
  if (value === Number.NEGATIVE_INFINITY) return result;

  const numberOfDigits = `${value}`.replace(/[\-\.]/g, "").length;
  const minimumNumberOfDigits = expectedNumberOfDigits[0] || Number.NEGATIVE_INFINITY;
  const maximumNumberOfDigits = expectedNumberOfDigits[1] || Number.POSITIVE_INFINITY;

  result.isPassed = numberOfDigits >= minimumNumberOfDigits && numberOfDigits <= maximumNumberOfDigits;

  return result;
};
