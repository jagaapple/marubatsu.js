// =============================================================================================================================
// SRC - CHECKERS - WITHIN LENGTH RANGE CHECKER
// =============================================================================================================================
import { getLength } from "./shared";

export const isWithinLengthRange = (value: any, range: [number, number]): boolean => {
  const lengthOfValue = getLength(value);
  if (lengthOfValue == undefined) return false;

  const minimumLength = range[0];
  const maximumLength = range[1];

  return lengthOfValue >= minimumLength && lengthOfValue <= maximumLength;
};
