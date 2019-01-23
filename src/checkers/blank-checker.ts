// =============================================================================================================================
// SRC - CHECKERS - BLANK CHECKER
// =============================================================================================================================
import { isNullary } from "./nullary-checker";
import { isEmpty } from "./empty-checker";

export const isBlank = (value: any) => {
  let trimmedValue: any = value;

  switch (typeof value) {
    case "string":
      trimmedValue = value.trim();

      break;
    case "boolean":
      return !value;
    default:
  }

  return isNullary(trimmedValue) || isEmpty(trimmedValue);
};
