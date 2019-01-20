// =============================================================================================================================
// SRC - CHECKERS - REGEXP CHECKER
// =============================================================================================================================
export const isConformingRegExp = (value: any, regexp: RegExp) => {
  if (value == undefined) return false;

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

  return regexp.test(stringValue);
};
