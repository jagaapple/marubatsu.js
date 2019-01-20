// =============================================================================================================================
// SRC - CHECKERS - ENDS WITH CHECKER
// =============================================================================================================================
export const endsWith = (value: any, expectedValue: string) => {
  if (value == undefined) return false;

  switch (typeof value) {
    case "number":
      return value.toString().endsWith(expectedValue);
    case "string":
      return value.endsWith(expectedValue);
    case "object":
      if (!Array.isArray(value)) return false;

      return (value[value.length - 1] || "").endsWith(value);
    default:
      return false;
  }
};
