// =============================================================================================================================
// SRC - OPERATORS - PRESENT
// =============================================================================================================================
import { isBlank } from "@checkers/index";
import { Validator } from "./shared";

export const present = () => {
  const validators: Validator = {
    type: () => true,
  };

  validators.present = (value: any) => !isBlank(value);

  return validators;
};
