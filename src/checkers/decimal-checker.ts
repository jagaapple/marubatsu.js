// =============================================================================================================================
// SRC - CHECKERS - DECIMAL CHECKER
// =============================================================================================================================
import { CheckResult } from "./shared";

type Result = CheckResult<"decimal">;
export const isDecimal = (value: any): Result => {
  const result: Result = {
    isPassed: false,
    expected: "decimal",
    actual: value,
  };

  if (typeof value !== "number") return result;

  if (value === Number.POSITIVE_INFINITY) return result;
  if (value === Number.NEGATIVE_INFINITY) return result;

  result.isPassed = ~~value !== value;

  return result;
};
