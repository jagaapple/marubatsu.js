// =============================================================================================================================
// SRC - CHECKERS - ALPHANUMERIC CHECKER
// =============================================================================================================================
export const isAlphanumeric = (value: any) => {
  let stringValue: string = "";

  switch (typeof value) {
    case "number":
      stringValue = value.toString();

      break;
    case "string":
      stringValue = value;

      break;
    default:
      return false;
  }

  return /^[0-9a-zA-z]*$/.test(stringValue);
};
