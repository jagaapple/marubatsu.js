// =============================================================================================================================
// SRC - CHECKERS - ALPHANUMERIC CHECKER
// =============================================================================================================================
import { CheckResult } from "./shared";

type Result = CheckResult<"alphanumeric">;
export const isAlphanumeric = (value: any): Result => {
  const result: Result = {
    isPassed: false,
    expected: "alphanumeric",
    actual: value,
  };

  let stringValue: string = "";
  switch (typeof value) {
    case "number":
      stringValue = value.toString();

      break;
    case "string":
      stringValue = value;

      break;
    default:
      return result;
  }

  result.isPassed = /^[0-9a-zA-z]*$/.test(stringValue);
  result.actual = stringValue;

  return result;
};
