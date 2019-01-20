// =============================================================================================================================
// SRC - OPERATORS - LENGTH
// =============================================================================================================================
import { isEqualToLength, isWithinLengthRange } from "@checkers/index";

export const length = (lengthOrMinimumLength: number, maximumLength?: number) => {
  if (maximumLength == undefined) return (value: any) => isEqualToLength(value, lengthOrMinimumLength);

  return (value: any) => isWithinLengthRange(value, [lengthOrMinimumLength, maximumLength]);
};
