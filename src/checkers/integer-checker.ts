// =============================================================================================================================
// SRC - CHECKERS - INTEGER CHECKER
// =============================================================================================================================
import { CheckResult } from "./shared";

type Result = CheckResult<"integer">;
export const isInteger = (value: any) => {
  const result: Result = {
    isPassed: false,
    expected: "integer",
    actual: value,
  };

  if (typeof value !== "number") return result;

  result.isPassed = ~~value === value;

  return result;
};
