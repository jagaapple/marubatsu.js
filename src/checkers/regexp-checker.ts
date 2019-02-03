// =============================================================================================================================
// SRC - CHECKERS - REGEXP CHECKER
// =============================================================================================================================
import { CheckResult } from "./shared";

type Result = CheckResult<true>;
export const isConformingRegExp = (value: any, regExp: RegExp): Result => {
  const result: Result = {
    isPassed: false,
    expected: true,
    actual: false,
  };

  if (value == undefined) return result;

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

  const isPassed = regExp.test(stringValue);
  result.isPassed = isPassed;
  result.actual = isPassed;

  return result;
};
