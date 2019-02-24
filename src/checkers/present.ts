// =============================================================================================================================
// SRC - CHECKERS - PRESENT
// =============================================================================================================================
import { CheckResult } from "./shared";
import { blank } from "./blank";

type Result = CheckResult<"present">;
export const present = (targetValue: any): Result => {
  const result: Result = {
    isPassed: false,
    expected: "present",
    actual: targetValue,
  };

  result.isPassed = !blank(targetValue).isPassed;

  return result;
};
