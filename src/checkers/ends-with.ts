// =============================================================================================================================
// SRC - CHECKERS - ENDS WITH CHECKER
// =============================================================================================================================
import { CheckResult } from "./shared";

type Result = CheckResult<string>;
export const endsWith = (value: any, expectedValue: string): Result => {
  const result: Result = {
    isPassed: false,
    expected: expectedValue,
    actual: value,
  };

  if (value == undefined) return result;

  switch (typeof value) {
    case "string":
      result.isPassed = value.endsWith(expectedValue);
      result.actual = value;

      return result;
    case "object": {
      if (!Array.isArray(value)) return result;

      const lastElement = value[value.length - 1];
      result.actual = lastElement;
      if (typeof lastElement !== "number" && typeof lastElement !== "string") return result;

      const stringValue = lastElement.toString();
      result.isPassed = stringValue === expectedValue;

      return result;
    }
    default:
      return result;
  }
};
