// =============================================================================================================================
// SRC - CHECKERS - EMPTY
// =============================================================================================================================
import { CheckResult, getType } from "./shared";

type Result = CheckResult<"empty">;
export const empty = (targetValue: any): Result => {
  const result: Result = {
    isPassed: false,
    expected: "empty",
    actual: targetValue,
  };

  let lengthOfValue: number = 0;
  switch (getType(targetValue)) {
    case "string":
      lengthOfValue = targetValue.length;

      break;
    case "array":
    case "object":
      lengthOfValue = Object.keys(targetValue).length;

      break;
    default:
      return result;
  }

  result.isPassed = lengthOfValue === 0;

  return result;
};
