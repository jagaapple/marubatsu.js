// =============================================================================================================================
// SRC - CHECKERS - SHARED - ALPHANUMERIC CHECKER
// =============================================================================================================================
export const checkAlphanumeric = (value: any) => {
  if (typeof value !== "number" && typeof value !== "string") return false;

  return /^[0-9a-zA-z]*$/.test(`{value}`);
};
