// =============================================================================================================================
// SRC - OPERATORS - BLANK
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

  return (_: Options = {}) => {
    const validators: Validators = {
      type: () => true,
    };

    validators.blank = isBlank;

    return validators;
  };
};
