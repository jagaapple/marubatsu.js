// =============================================================================================================================
// SRC - CHECKERS - PATTERN
// =============================================================================================================================
import { CheckResult } from "./shared";

type Result = CheckResult<true, boolean>;
export const pattern = (value: any, regExp: RegExp): Result => {
  const result: Result = {
    isPassed: false,
    expected: true,
    actual: false,
  };

  if (typeof value !== "number" && typeof value !== "string") return result;

  result.isPassed = regExp.test(`${value}`);
  result.actual = result.isPassed;

  return result;
};
