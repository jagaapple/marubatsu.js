// =============================================================================================================================
// SRC - CHECKERS - STARTS WITH CHECKER
// =============================================================================================================================
export const startsWith = (value: any, expectedValue: string) => {
  if (value == undefined) return false;

  switch (typeof value) {
    case "number":
      return value.toString().startsWith(expectedValue);
    case "string":
      return value.startsWith(expectedValue);
    case "object":
      if (!Array.isArray(value)) return false;

      return (value[0] || "").startsWith(value);
    default:
      return false;
  }
};
