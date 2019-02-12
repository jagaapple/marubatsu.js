// =============================================================================================================================
// SRC - CHECKERS - CAMEL CASE CHECKER
// =============================================================================================================================
import { CheckResult } from "./shared";

type Result = CheckResult<"upper-camel-case" | "lower-camel-case">;
export const isCamelCase = (value: any, isUpper: boolean): Result => {
  const result: Result = {
    isPassed: false,
    expected: isUpper ? "upper-camel-case" : "lower-camel-case",
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

  const prefixPattern = isUpper ? "[0-9A-Z][a-z]*" : "[0-9a-z]+";
  const regExp = new RegExp(`^${prefixPattern}([0-9A-Z][a-z]*)*$`);

  result.isPassed = regExp.test(stringValue);

  return result;
};
