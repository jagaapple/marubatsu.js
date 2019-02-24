// =============================================================================================================================
// SRC - CHECKERS - INCLUDES
// =============================================================================================================================
import { CheckResult } from "./shared";

type Result = CheckResult<string>;
export const includes = (targetValue: any, expectedValue: string): Result => {
  const result: Result = {
    isPassed: false,
    expected: expectedValue,
    actual: targetValue,
  };

  if (targetValue == undefined) return result;

  switch (typeof targetValue) {
    case "number":
      if (targetValue === Number.POSITIVE_INFINITY) return result;
      if (targetValue === Number.NEGATIVE_INFINITY) return result;

      result.actual = `${targetValue}`;
      result.isPassed = `${targetValue}`.includes(expectedValue);

      return result;
    case "string":
      result.isPassed = targetValue.includes(expectedValue);

      return result;
    case "object": {
      if (!Array.isArray(targetValue)) return result;

      result.isPassed = targetValue
        .map((element: any) => {
          // Converts all elements in array to string.
          if (typeof element !== "number" && typeof element !== "string") return element;
          if (element === Number.POSITIVE_INFINITY) return element;
          if (element === Number.NEGATIVE_INFINITY) return element;

          return `${element}`;
        })
        .includes(expectedValue);

      return result;
    }
    default:
      return result;
  }
};
