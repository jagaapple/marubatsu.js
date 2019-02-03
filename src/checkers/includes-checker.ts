// =============================================================================================================================
// SRC - CHECKERS - INCLUDES CHECKER
// =============================================================================================================================
import { CheckResult } from "./shared";

type Result = CheckResult<string>;
export const includes = (value: any, expectedValue: string): Result => {
  const result: Result = {
    isPassed: false,
    expected: expectedValue,
    actual: value,
  };

  if (value == undefined) return result;

  let checkableValue: string | any[] = "";
  switch (typeof value) {
    case "string":
      checkableValue = value;

      break;
    case "object":
      if (!Array.isArray(value)) return result;

      // Convert all elements in array to string.
      checkableValue = value.map((element: any) => {
        if (typeof element !== "number" && typeof element !== "string") return element;

        return element.toString();
      });

      break;
    default:
      return result;
  }

  result.isPassed = checkableValue.includes(expectedValue);

  return result;
};
