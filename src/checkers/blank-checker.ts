// =============================================================================================================================
// SRC - CHECKERS - BLANK CHECKER
// =============================================================================================================================
import { isNullary } from "./nullary-checker";
import { isEmpty } from "./empty-checker";

export const isBlank = (value: any) => {
  let trimmedValue = value;

  switch (typeof value) {
    case "string":
      trimmedValue = value.trim();

      break;
    case "boolean":
      return value === false;
    default:
  }

  return isNullary(trimmedValue) || isEmpty(trimmedValue);
};
