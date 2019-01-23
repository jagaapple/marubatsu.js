// =============================================================================================================================
// SRC - CHECKERS - TYPE CHECKER
// =============================================================================================================================
type ValueType = "number" | "string" | "boolean" | "null" | "undefined" | "array" | "object" | "function";

export const isType = (value: any, expectedType: ValueType) => {
  if (value === null) return expectedType === "null";
  if (Array.isArray(value)) return expectedType === "array";

  return typeof value === expectedType;
};
