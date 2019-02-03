// =============================================================================================================================
// SRC - CHECKERS - NEGATIVE NUMBER CHECKER
// =============================================================================================================================
import { CheckResult } from "./shared";

type Result = CheckResult<"negative-number">;
export const isNegativeNumber = (value: any) => {
  const result: Result = {
    isPassed: false,
    expected: "negative-number",
    actual: value,
  };

  if (typeof value !== "number") return result;

  result.isPassed = value < 0;

  return result;
};
