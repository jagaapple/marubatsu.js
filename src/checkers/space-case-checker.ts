// =============================================================================================================================
// SRC - CHECKERS - SPACE CASE CHECKER
// =============================================================================================================================
import { CheckResult } from "./shared";

type Result = CheckResult<"upper-space-case" | "lower-space-case">;
export const isSpaceCase = (value: any, isUpper: boolean): Result => {
  const result: Result = {
    isPassed: false,
    expected: isUpper ? "upper-space-case" : "lower-space-case",
    actual: value,
  };

  let stringValue: string = "";
  switch (typeof value) {
    case "number":
      stringValue = value.toString();

      break;
    case "string":
      if (value.length === 0) {
        result.isPassed = true;

        return result;
      }

      stringValue = value;

      break;
    default:
      return result;
  }

  const wordingPattern = isUpper ? "[0-9A-Z][a-z]*" : "[0-9a-z]+";
  const regExp = new RegExp(`^${wordingPattern}(\\s${wordingPattern})*$`);

  result.isPassed = regExp.test(stringValue);

  return result;
};
