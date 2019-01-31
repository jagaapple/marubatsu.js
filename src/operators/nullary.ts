// =============================================================================================================================
// SRC - OPERATORS - NULLARY
// =============================================================================================================================
import { isNullary } from "@checkers/index";
import { Validators } from "./shared";

const deafultCheckers = {
  isNullary,
};

export interface Options {}

type DICheckers = { [K in keyof typeof deafultCheckers]: typeof deafultCheckers[K] };
export const createNullaryOperator = (checkers: Partial<DICheckers> = {}) => {
  // tslint:disable:no-shadowed-variable
  const { isNullary } = { ...deafultCheckers, ...checkers };
  // tslint:enable:no-shadowed-variable

  return (_: Options = {}) => {
    const validators: Validators = {
      type: () => true,
    };

    validators.nullary = isNullary;

    return validators;
  };
};
