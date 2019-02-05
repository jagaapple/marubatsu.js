// =============================================================================================================================
// SRC - OPERATORS - BLANK OPERATOR
// =============================================================================================================================
import { isBlank } from "@checkers/index";
import { Validators } from "./shared";

const deafultCheckers = {
  isBlank,
};

export interface Options {}

type DICheckers = { [K in keyof typeof deafultCheckers]: typeof deafultCheckers[K] };
export const createBlankOperator = (checkers: Partial<DICheckers> = {}) => {
  // tslint:disable:no-shadowed-variable
  const { isBlank } = { ...deafultCheckers, ...checkers };
  // tslint:enable:no-shadowed-variable

  return {
    name: "blank",
    createValidators: (_: Options = {}) => {
      const validators: Validators = {};

      validators.blank = isBlank;

      return validators;
    },
  };
};
