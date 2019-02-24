// =============================================================================================================================
// SRC - CHECKERS - LENGTH
// =============================================================================================================================
import { CheckResult, getLength } from "./shared";

type Result = CheckResult<number | [number, number], number>;
export const length = (targetValue: any, expectedLength: number | [number, number]): Result => {
  const lengthOfValue = getLength(targetValue);

  if (Array.isArray(expectedLength)) {
    const minimumLength = expectedLength[0];
    const maximumLength = expectedLength[1];

    return {
      isPassed: lengthOfValue >= minimumLength && lengthOfValue <= maximumLength,
      expected: expectedLength,
      actual: lengthOfValue,
    };
  }

  return {
    isPassed: lengthOfValue === expectedLength,
    expected: expectedLength,
    actual: lengthOfValue,
  };
};
