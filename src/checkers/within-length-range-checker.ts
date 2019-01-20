// =============================================================================================================================
// SRC - CHECKERS - WITHIN LENGTH RANGE CHECKER
// =============================================================================================================================
import { getLength } from "./shared";

export const isWithinLengthRange = (value: any, range: [number | undefined, number | undefined]): boolean => {
  const lengthOfValue = getLength(value);
  if (lengthOfValue == undefined) return false;

  const minimumLength = range[0] || Number.NEGATIVE_INFINITY;
  const maximumLength = range[1] || Number.POSITIVE_INFINITY;

  return lengthOfValue >= minimumLength && lengthOfValue <= maximumLength;
};
