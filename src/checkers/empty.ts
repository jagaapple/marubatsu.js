// =============================================================================================================================
// SRC - CHECKERS - EMPTY
// =============================================================================================================================
import { CheckResult } from "./shared";

type Result = CheckResult<"empty">;
export const empty = (targetValue: any): Result => {
  const result: Result = {
    isPassed: false,
    expected: "empty",
    actual: targetValue,
  };

  if (targetValue == undefined) return result;

  let lengthOfValue: number = 0;
  switch (typeof targetValue) {
    case "string":
      lengthOfValue = targetValue.length;

      break;
    case "object":
      lengthOfValue = Object.keys(targetValue).length;

      break;
    default:
      return result;
  }

  result.isPassed = lengthOfValue === 0;

  return result;
};
