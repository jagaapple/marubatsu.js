// =============================================================================================================================
// SRC - CHECKERS - WITHIN NUMBER RANGE CHECKER
// =============================================================================================================================
export const isWithinNumberRange = (value: any, expectedValue: [number | undefined, number | undefined]) => {
  if (typeof value !== "number") return false;

  const minimumValue = expectedValue[0] || Number.NEGATIVE_INFINITY;
  const maximumValue = expectedValue[1] || Number.POSITIVE_INFINITY;

  return value <= maximumValue && value >= minimumValue;
};
