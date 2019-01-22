// =============================================================================================================================
// SRC - OPERATORS - PRESENT
// =============================================================================================================================
import { isBlank } from "@checkers/index";
import { Validator } from "./shared";

const deafultCheckers = {
  isBlank,
};

export interface Options {}

type DICheckers = { [K in keyof typeof deafultCheckers]: typeof deafultCheckers[K] };
export const createPresentOperator = (checkers: Partial<DICheckers> = {}) => {
  // tslint:disable:no-shadowed-variable
  const { isBlank } = { ...deafultCheckers, ...checkers };
  // tslint:enable:no-shadowed-variable

  return (_: Options = {}) => {
    const validators: Validator = {
      type: () => true,
    };

    validators.present = (value: any) => !isBlank(value);

    return validators;
  };
};
