// =============================================================================================================================
// SRC - CHECKERS - SPACE CASE CHECKER
// =============================================================================================================================
export const isSpaceCase = (value: any, isUpper: boolean) => {
  let stringValue: string = "";

  switch (typeof value) {
    case "number":
      stringValue = value.toString();

      break;
    case "string":
      if (value.length === 0) return true;
      stringValue = value;

      break;
    default:
      return false;
  }

  const wordingPattern = isUpper ? "[0-9A-Z][a-z]*" : "[0-9a-z]+";
  const regExp = new RegExp(`^${wordingPattern}(\\s${wordingPattern})*$`);

  return regExp.test(stringValue);
};
