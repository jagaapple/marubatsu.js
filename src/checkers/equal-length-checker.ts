// =============================================================================================================================
// SRC - CHECKERS - EQUAL LENGTH CHECKER
// =============================================================================================================================
import { CheckResult, getLength } from "./shared";

type Result = CheckResult<number, number | "invalid-value">;
export const isEqualToLength = (value: any, len: number): Result => {
  const result: Result = {
    isPassed: false,
    expected: len,
    actual: "invalid-value",
  };

  const length = getLength(value);
  result.isPassed = length === len;
  result.actual = length != undefined ? length : "invalid-value";

  return result;
};
