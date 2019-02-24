// =============================================================================================================================
// SRC - CHECKERS - SHARED - TYPE GETTER
// =============================================================================================================================
type ValueType = "number" | "string" | "boolean" | "null" | "undefined" | "array" | "object" | "function" | "bigint" | "symbol";

export const getType = (targetValue: any): ValueType => {
  if (targetValue === null) return "null";
  if (Array.isArray(targetValue)) return "array";

  return typeof targetValue;
};
