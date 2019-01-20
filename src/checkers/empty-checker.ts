// =============================================================================================================================
// SRC - CHECKERS - EMPTY CHECKER
// =============================================================================================================================
export const isEmpty = (value: any) => {
  if (value == undefined) return true;

  switch (typeof value) {
    case "string":
      return value.length === 0;
    case "object":
      return Object.keys(value).length === 0;
    default:
      return false;
  }
};
