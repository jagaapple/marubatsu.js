// =============================================================================================================================
// SRC - CHECKERS - WITHIN DIGITS RANGE CHECKER
// =============================================================================================================================
export const isWithinDigitsRange = (value: any, expectedNumberOfDigits: [number | undefined, number | undefined]) => {
  if (typeof value !== "number") return false;

  if (value === Number.POSITIVE_INFINITY) return false;
  if (value === Number.NEGATIVE_INFINITY) return false;

  const numberOfDigits = `${value}`.replace(/[\-\.]/g, "").length;
  const minimumNumberOfDigits = expectedNumberOfDigits[0] || Number.NEGATIVE_INFINITY;
  const maximumNumberOfDigits = expectedNumberOfDigits[1] || Number.POSITIVE_INFINITY;

  return numberOfDigits >= minimumNumberOfDigits && numberOfDigits <= maximumNumberOfDigits;
};
