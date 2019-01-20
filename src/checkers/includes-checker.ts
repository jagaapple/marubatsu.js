// =============================================================================================================================
// SRC - CHECKERS - INCLUDES CHECKER
// =============================================================================================================================
export const includes = (value: any, expectedValue: string) => {
  if (value == undefined) return false;

  let checkableValue: string | any[] = "";

  switch (typeof value) {
    case "number":
      checkableValue = value.toString();

      break;
    case "string":
      checkableValue = value;

      break;
    case "object":
      if (!Array.isArray(value)) return false;

      checkableValue = value;

      break;
    default:
      return false;
  }

  return checkableValue.includes(expectedValue);
};
