// =============================================================================================================================
// SRC - CHECKERS - STARTS WITH CHECKER
// =============================================================================================================================
import { CheckResult } from "./shared";

type Result = CheckResult<string>;
export const startsWith = (value: any, expectedValue: string): Result => {
  const result: Result = {
    isPassed: false,
    expected: expectedValue,
    actual: value,
  };

  if (value == undefined) return result;

  switch (typeof value) {
    case "string":
      result.isPassed = value.startsWith(expectedValue);
      result.actual = value;

      return result;
    case "object": {
      if (!Array.isArray(value)) return result;

      const firstElement = value[0];
      result.actual = firstElement;
      if (typeof firstElement !== "number" && typeof firstElement !== "string") return result;

      const stringValue = firstElement.toString();
      result.isPassed = stringValue === expectedValue;

      return result;
    }
    default:
      return result;
  }
};
