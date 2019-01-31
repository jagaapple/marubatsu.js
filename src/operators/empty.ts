// =============================================================================================================================
// SRC - OPERATORS - EMPTY
// =============================================================================================================================
import { isEmpty } from "@checkers/index";
import { Validators } from "./shared";

const deafultCheckers = {
  isEmpty,
};

export interface Options {}

type DICheckers = { [K in keyof typeof deafultCheckers]: typeof deafultCheckers[K] };
export const createEmptyOperator = (checkers: Partial<DICheckers> = {}) => {
  // tslint:disable:no-shadowed-variable
  const { isEmpty } = { ...deafultCheckers, ...checkers };
  // tslint:enable:no-shadowed-variable

  return {
    name: "empty",
    createValidators: (_: Options = {}) => {
      const validators: Validators = {
        type: { executor: () => true },
      };

      validators.empty = { expected: true, executor: isEmpty };

      return validators;
    },
  };
};
