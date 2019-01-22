// =============================================================================================================================
// SRC - CHECKERS - EMPTY CHECKER
// =============================================================================================================================
export const isEmpty = (value: any) => {
  if (value == undefined) return false;

  let valueLength: number = 0;

  switch (typeof value) {
    case "string":
      valueLength = value.length;

      break;
    case "object":
      valueLength = Object.keys(value).length;

      break;
    default:
      return false;
  }

  return valueLength === 0;
};
