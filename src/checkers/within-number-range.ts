// =============================================================================================================================
// SRC - CHECKERS - WITHIN NUMBER RANGE CHECKER
// =============================================================================================================================
import { CheckResult } from "./shared";

type Result = CheckResult<[number, number]>;
export const isWithinNumberRange = (value: any, expectedValue: [number | undefined, number | undefined]): Result => {
  const result: Result = {
    isPassed: false,
    expected: [expectedValue[0] || Number.NEGATIVE_INFINITY, expectedValue[1] || Number.POSITIVE_INFINITY],
    actual: value,
  };

  if (typeof value !== "number") return result;

  const minimumValue = expectedValue[0] || Number.NEGATIVE_INFINITY;
  const maximumValue = expectedValue[1] || Number.POSITIVE_INFINITY;

  result.isPassed = value <= maximumValue && value >= minimumValue;

  return result;
};
