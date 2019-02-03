// =============================================================================================================================
// SRC - CHECKERS - POSITIVE NUMBER CHECKER
// =============================================================================================================================
import { CheckResult } from "./shared";

type Result = CheckResult<"positive-number">;
export const isPositiveNumber = (value: any): Result => {
  const result: Result = {
    isPassed: false,
    expected: "positive-number",
    actual: value,
  };

  if (typeof value !== "number") return result;

  result.isPassed = value > 0;

  return result;
};
