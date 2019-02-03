// =============================================================================================================================
// SRC - CHECKERS - TYPE CHECKER
// =============================================================================================================================
import { CheckResult } from "./shared";

type ValueType = "number" | "string" | "boolean" | "null" | "undefined" | "array" | "object" | "function" | "bigint" | "symbol";

type Result = CheckResult<ValueType, ValueType>;
export const isType = (value: any, expectedType: ValueType): Result => {
  const result: Result = {
    isPassed: false,
    expected: expectedType,
    actual: "undefined",
  };

  let type: ValueType = typeof value;
  if (value === null) {
    type = "null";
  }
  if (Array.isArray(value)) {
    type = "array";
  }

  result.isPassed = type === expectedType;
  result.actual = type;

  return result;
};
