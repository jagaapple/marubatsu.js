// =============================================================================================================================
// SRC - CHECKERS - ENDS WITH
// =============================================================================================================================
import { CheckResult, getType } from "./shared";

type Result = CheckResult<string>;
export const endsWith = (targetValue: any, expectedValue: string): Result => {
  const result: Result = {
    isPassed: false,
    expected: expectedValue,
    actual: targetValue,
  };

  switch (getType(targetValue)) {
    case "number":
      if (targetValue === Number.POSITIVE_INFINITY) return result;
      if (targetValue === Number.NEGATIVE_INFINITY) return result;

      result.isPassed = `${targetValue}`.endsWith(expectedValue);

      return result;
    case "string":
      result.isPassed = targetValue.endsWith(expectedValue);

      return result;
    case "array": {
      const lastElement = targetValue[targetValue.length - 1];
      result.actual = lastElement;

      const type = getType(lastElement);
      if (type !== "number" && type !== "string") return result;

      result.isPassed = `${lastElement}` === expectedValue;

      return result;
    }
    default:
      return result;
  }
};
