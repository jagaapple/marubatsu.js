// =============================================================================================================================
// SRC - CHECKERS - SHARED - LENGTH GETTER
// =============================================================================================================================
import { getType } from "./type-getter";

export const getLength = (targetValue: any) => {
  switch (getType(targetValue)) {
    case "number":
      if (targetValue === Number.POSITIVE_INFINITY) return targetValue;
      if (targetValue === Number.NEGATIVE_INFINITY) return targetValue;

      return `${targetValue}`.replace(/[\-\.]/g, "").length;
    case "string":
      return targetValue.length;
    case "array":
    case "object":
      return Object.keys(targetValue).length;
    default:
      return 0;
  }
};
