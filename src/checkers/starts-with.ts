// =============================================================================================================================
// SRC - CHECKERS - STARTS WITH
// =============================================================================================================================
import { CheckResult } from "./shared";

type Result = CheckResult<string>;
export const startsWith = (targetValue: any, expectedValue: string): Result => {
  const result: Result = {
    isPassed: false,
    expected: expectedValue,
    actual: targetValue,
  };

  switch (typeof targetValue) {
    case "number":
      if (targetValue === Number.POSITIVE_INFINITY) return result;
      if (targetValue === Number.NEGATIVE_INFINITY) return result;

      result.isPassed = `${targetValue}`.startsWith(expectedValue);

      return result;
    case "string":
      result.isPassed = targetValue.startsWith(expectedValue);

      return result;
    case "object": {
      if (!Array.isArray(targetValue)) return result;

      const firstElement = targetValue[0];
      result.actual = firstElement;

      if (typeof firstElement !== "number" && typeof firstElement !== "string") return result;

      result.isPassed = `${firstElement}` === expectedValue;

      return result;
    }
    default:
      return result;
  }
};
