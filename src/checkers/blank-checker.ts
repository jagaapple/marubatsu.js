// =============================================================================================================================
// SRC - CHECKERS - BLANK CHECKER
// =============================================================================================================================
import { isNullary } from "./nullary-checker";
import { isEmpty } from "./empty-checker";

export const isBlank = (value: any) => {
  let trimmedValue = value;
  if (typeof value === "string") {
    trimmedValue = value.trim();
  }
  if (typeof value === "boolean") return value === false;

  return isNullary(trimmedValue) || isEmpty(trimmedValue);
};
