// =============================================================================================================================
// SRC - CHECKERS - EQUAL VALUE CHECKER
// =============================================================================================================================
import { CheckResult } from "./shared";

type Result = CheckResult<number>;
export const isEqualToValue = (value: any, expectedValue: any): Result => {
  const result: Result = {
    isPassed: false,
    expected: expectedValue,
    actual: value,
  };

  result.isPassed = value === expectedValue;

  return result;
};
