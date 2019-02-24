// =============================================================================================================================
// SRC - CHECKERS - SHARED - LENGTH GETTER
// =============================================================================================================================
export const getLength = (targetValue: any) => {
  if (targetValue == undefined) return 0;

  switch (typeof targetValue) {
    case "number":
      if (targetValue === Number.POSITIVE_INFINITY) return targetValue;
      if (targetValue === Number.NEGATIVE_INFINITY) return targetValue;

      return `${targetValue}`.replace(/[\-\.]/g, "").length;
    case "string":
      return targetValue.length;
    case "object":
      return Object.keys(targetValue).length;
    default:
      return 0;
  }
};
