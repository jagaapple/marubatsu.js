// =============================================================================================================================
// SRC - OPERATORS - NULLARY
// =============================================================================================================================
import { isNullary } from "@checkers/index";
import { Validator } from "./shared";

export const nullary = () => {
  const validators: Validator = {
    type: () => true,
  };

  validators.nullary = isNullary;

  return validators;
};
