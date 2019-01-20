// =============================================================================================================================
// SRC - CHECKERS - EMPTY CHECKER
// =============================================================================================================================
export const isEmpty = (value: any) => {
  if (value == undefined) return true;
  if (typeof value === "string") return value.length === 0;
  if (typeof value === "object") return Object.keys(value).length === 0;

  return false;
};
