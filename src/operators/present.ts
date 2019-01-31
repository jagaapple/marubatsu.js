// =============================================================================================================================
// SRC - OPERATORS - PRESENT
// =============================================================================================================================
import { isBlank } from "@checkers/index";
import { Validators } from "./shared";

const deafultCheckers = {
  isBlank,
};

export interface Options {}

type DICheckers = { [K in keyof typeof deafultCheckers]: typeof deafultCheckers[K] };
export const createPresentOperator = (checkers: Partial<DICheckers> = {}) => {
  // tslint:disable:no-shadowed-variable
  const { isBlank } = { ...deafultCheckers, ...checkers };
  // tslint:enable:no-shadowed-variable

  return {
    name: "present",
    createValidators: (_: Options = {}) => {
      const validators: Validators = {
        type: { executor: () => true },
      };

      validators.present = {
        expected: true,
        executor: (value: any) => !isBlank(value),
      };

      return validators;
    },
  };
};
