// =============================================================================================================================
// SRC - CHECKERS - DECIMAL CHECKER
// =============================================================================================================================
export const isDecimal = (value: any) => {
  if (typeof value !== "number") return false;

  if (value === Number.POSITIVE_INFINITY) return false;
  if (value === Number.NEGATIVE_INFINITY) return false;

  return ~~value !== value;
};
