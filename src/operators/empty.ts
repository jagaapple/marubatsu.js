// =============================================================================================================================
// SRC - OPERATORS - EMPTY
// =============================================================================================================================
import { isEmpty } from "@checkers/index";
import { Validator } from "./shared";

const deafultCheckers = {
  isEmpty,
};

export interface Options {}

type DICheckers = { [K in keyof typeof deafultCheckers]: typeof deafultCheckers[K] };
export const createEmptyOperator = (checkers: Partial<DICheckers> = {}) => {
  // tslint:disable:no-shadowed-variable
  const { isEmpty } = { ...deafultCheckers, ...checkers };
  // tslint:enable:no-shadowed-variable

  return (_: Options = {}) => {
    const validators: Validator = {
      type: () => true,
    };

    validators.empty = isEmpty;

    return validators;
  };
};
