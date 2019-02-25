// =============================================================================================================================
// SRC - CHECKERS - LENGTH
// =============================================================================================================================
import { CheckResult, getLength } from "./shared";

interface Range {
  minimum: number;
  maximum: number;
}

type Result = CheckResult<number | Range, number>;
export const length = (targetValue: any, expectedLength: number | Range): Result => {
  const lengthOfValue = getLength(targetValue);

  if (typeof expectedLength === "object") {
    const minimumLength = expectedLength.minimum;
    const maximumLength = expectedLength.maximum;

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
