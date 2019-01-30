// =============================================================================================================================
// SRC - CHECKERS - EQUAL DIGITS CHECKER
// =============================================================================================================================
export const hasDigits = (value: any, expectedNumberOfDigits: number) => {
  if (typeof value !== "number") return false;

  if (value === Number.POSITIVE_INFINITY) return false;
  if (value === Number.NEGATIVE_INFINITY) return false;

  return `${value}`.replace(/[\-\.]/g, "").length === expectedNumberOfDigits;
};
