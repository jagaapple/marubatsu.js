// =============================================================================================================================
// SRC - CHECKERS - ENDS WITH
// =============================================================================================================================
import { CheckResult } from "./shared";

type Result = CheckResult<string>;
export const endsWith = (targetValue: any, expectedValue: string): Result => {
  const result: Result = {
    isPassed: false,
    expected: expectedValue,
    actual: targetValue,
  };

  switch (typeof targetValue) {
    case "number":
      if (targetValue === Number.POSITIVE_INFINITY) return result;
      if (targetValue === Number.NEGATIVE_INFINITY) return result;

      result.isPassed = `${targetValue}`.endsWith(expectedValue);

      return result;
    case "string":
      result.isPassed = targetValue.endsWith(expectedValue);

      return result;
    case "object": {
      if (!Array.isArray(targetValue)) return result;

      const lastElement = targetValue[targetValue.length - 1];
      result.actual = lastElement;

      if (typeof lastElement !== "number" && typeof lastElement !== "string") return result;

      result.isPassed = `${lastElement}` === expectedValue;

      return result;
    }
    default:
      return result;
  }
};
