// =============================================================================================================================
// SRC - CHECKERS - NULLARY
// =============================================================================================================================
import { CheckResult, getType } from "./shared";

type Result = CheckResult<"nullary">;
export const nullary = (targetValue: any): Result => {
  const type = getType(targetValue);

  return {
    isPassed: type === "undefined" || type === "null",
    expected: "nullary",
    actual: targetValue,
  };
};
