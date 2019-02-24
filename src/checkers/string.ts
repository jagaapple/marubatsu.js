// =============================================================================================================================
// SRC - CHECKERS - STRING
// =============================================================================================================================
import { CheckResult, getType, ValueType } from "./shared";

type Result = CheckResult<"string", ValueType>;
// tslint:disable-next-line:variable-name
export const string = (targetValue: any): Result => {
  const type = getType(targetValue);

  return {
    isPassed: type === "string",
    expected: "string",
    actual: type,
  };
};
