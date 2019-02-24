// =============================================================================================================================
// SRC - CHECKERS - STRING
// =============================================================================================================================
import { CheckResult, getType } from "./shared";

type Result = CheckResult<"string">;
// tslint:disable-next-line:variable-name
export const string = (targetValue: any): Result => {
  const type = getType(targetValue);

  return {
    isPassed: type === "string",
    expected: "string",
    actual: type,
  };
};
