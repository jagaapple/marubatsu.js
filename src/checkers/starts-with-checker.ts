// =============================================================================================================================
// SRC - CHECKERS - STARTS WITH CHECKER
// =============================================================================================================================
export const startsWith = (value: any, expectedValue: string) => {
  if (value == undefined) return false;

  let stringValue: string = "";

  switch (typeof value) {
    case "number":
      stringValue = value.toString();

      break;
    case "string":
      stringValue = value;

      break;
    case "object":
      if (!Array.isArray(value)) return false;

      stringValue = value[0] || "";

      break;
    default:
      return false;
  }

  return stringValue.startsWith(expectedValue);
};
