// =============================================================================================================================
// SRC - OPERATORS - EMPTY
// =============================================================================================================================
import { isEmpty } from "@checkers/index";
import { Validator } from "./shared";

export const empty = () => {
  const validators: Validator = {
    type: () => true,
  };

  validators.empty = isEmpty;

  return validators;
};
