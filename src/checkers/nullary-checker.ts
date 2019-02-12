// =============================================================================================================================
// SRC - CHECKERS - NULLARY CHECKER
// =============================================================================================================================
import { CheckResult } from "./shared";

type Result = CheckResult<"nullary">;
export const isNullary = (value: any): Result => {
  const result: Result = {
    isPassed: false,
    expected: "nullary",
    actual: value,
  };

  result.isPassed = value == undefined;

  return result;
};
