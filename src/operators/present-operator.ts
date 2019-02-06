// =============================================================================================================================
// SRC - OPERATORS - PRESENT OPERATOR
// =============================================================================================================================
import { isPresent } from "@checkers/index";
import { Validators } from "./shared";

const deafultCheckers = {
  isPresent,
};

export interface Options {
  present?: unknown; // Defines for messages but not used
}

type DICheckers = { [K in keyof typeof deafultCheckers]: typeof deafultCheckers[K] };
export const createPresentOperator = (checkers: Partial<DICheckers> = {}) => {
  // tslint:disable:no-shadowed-variable
  const { isPresent } = { ...deafultCheckers, ...checkers };
  // tslint:enable:no-shadowed-variable

  return {
    name: "present",
    createValidators: (_: Options = {}) => {
      const validators: Validators = {};

      validators.present = isPresent;

      return validators;
    },
  };
};
