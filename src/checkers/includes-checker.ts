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

      // Convert all elements in array to string.
      checkableValue = value.map((element: any) => {
        if (typeof element !== "number" && typeof element !== "string") return element;

        return element.toString();
      });

      break;
    default:
      return false;
  }

  return checkableValue.includes(expectedValue);
};
