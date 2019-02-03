// =============================================================================================================================
// SRC - CHECKERS - EMPTY CHECKER
// =============================================================================================================================
import { CheckResult } from "./shared";

type Result = CheckResult<"empty">;
export const isEmpty = (value: any): Result => {
  const result: Result = {
    isPassed: false,
    expected: "empty",
    actual: value,
  };

  if (value == undefined) return result;

  let valueLength: number = 0;
  switch (typeof value) {
    case "string":
      valueLength = value.length;

      break;
    case "object":
      valueLength = Object.keys(value).length;

      break;
    default:
      return result;
  }

  result.isPassed = valueLength === 0;

  return result;
};
