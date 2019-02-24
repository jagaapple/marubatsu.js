// =============================================================================================================================
// SRC - CHECKERS - WITHIN LENGTH RANGE CHECKER
// =============================================================================================================================
import { CheckResult, getLength } from "./shared";

type Result = CheckResult<[number, number]>;
export const isWithinLengthRange = (value: any, range: [number | undefined, number | undefined]): Result => {
  const result: Result = {
    isPassed: false,
    expected: [range[0] || Number.NEGATIVE_INFINITY, range[1] || Number.POSITIVE_INFINITY],
    actual: "invalid-value",
  };

  const lengthOfValue = getLength(value);
  if (lengthOfValue == undefined) return result;

  const minimumLength = range[0] || Number.NEGATIVE_INFINITY;
  const maximumLength = range[1] || Number.POSITIVE_INFINITY;

  result.isPassed = lengthOfValue >= minimumLength && lengthOfValue <= maximumLength;
  result.actual = lengthOfValue;

  return result;
};
