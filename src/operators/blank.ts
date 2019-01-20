// =============================================================================================================================
// SRC - OPERATORS - BLANK
// =============================================================================================================================
import { isBlank } from "@checkers/index";
import { Validator } from "./shared";

export const blank = () => {
  const validators: Validator = {
    type: () => true,
  };

  validators.blank = isBlank;

  return validators;
};
