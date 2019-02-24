// =============================================================================================================================
// SRC - CHECKERS - STARTS WITH
// =============================================================================================================================
import { CheckResult, getType } from "./shared";

type Result = CheckResult<string>;
export const startsWith = (targetValue: any, expectedValue: string): Result => {
  const result: Result = {
    isPassed: false,
    expected: expectedValue,
    actual: targetValue,
  };

  switch (getType(targetValue)) {
    case "number":
      if (targetValue === Number.POSITIVE_INFINITY) return result;
      if (targetValue === Number.NEGATIVE_INFINITY) return result;

      result.isPassed = `${targetValue}`.startsWith(expectedValue);

      return result;
    case "string":
      result.isPassed = targetValue.startsWith(expectedValue);

      return result;
    case "array": {
      const firstElement = targetValue[0];
      result.actual = firstElement;

      const type = getType(firstElement);
      if (type !== "number" && type !== "string") return result;

      result.isPassed = `${firstElement}` === expectedValue;

      return result;
    }
    default:
      return result;
  }
};
