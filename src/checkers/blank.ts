// =============================================================================================================================
// SRC - CHECKERS - BLANK
// =============================================================================================================================
import { CheckResult } from "./shared";
import { nullary } from "./nullary";
import { empty } from "./empty";

type Result = CheckResult<"blank">;
export const blank = (targetValue: any): Result => {
  const result: Result = {
    isPassed: false,
    expected: "blank",
    actual: targetValue,
  };

  let trimmedValue = targetValue;
  switch (typeof targetValue) {
    case "string":
      trimmedValue = targetValue.trim();

      break;
    case "boolean":
      result.isPassed = !targetValue;

      return result;
    default:
  }

  result.isPassed = nullary(trimmedValue).isPassed || empty(trimmedValue).isPassed;

  return result;
};
