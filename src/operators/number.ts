// =============================================================================================================================
// SRC - OPERATORS - NUMBER
// =============================================================================================================================
import {
  hasDigits,
  isDecimal,
  isInteger,
  isNegativeNumber,
  isPositiveNumber,
  isType,
  isWithinDigitsRange,
  isWithinNumberRange,
} from "@checkers/index";
import { Validators } from "./shared";

const deafultCheckers = {
  hasDigits,
  isDecimal,
  isInteger,
  isNegativeNumber,
  isPositiveNumber,
  isType,
  isWithinDigitsRange,
  isWithinNumberRange,
};

export interface Options {
  value?: number | [number, number];
  maximumValue?: number;
  minimumValue?: number;
  integer?: boolean;
  float?: boolean;
  positive?: boolean;
  negative?: boolean;
  digits?: number | [number, number];
  maximumDigits?: number;
  minimumDigits?: number;
}

type DICheckers = { [K in keyof typeof deafultCheckers]: typeof deafultCheckers[K] };
export const createNumberOperator = (checkers: Partial<DICheckers> = {}) => {
  // tslint:disable:no-shadowed-variable
  const {
    hasDigits,
    isDecimal,
    isInteger,
    isNegativeNumber,
    isPositiveNumber,
    isType,
    isWithinDigitsRange,
    isWithinNumberRange,
  } = {
    ...deafultCheckers,
    ...checkers,
  };
  // tslint:enable:no-shadowed-variable

  return {
    name: "number",
    createValidators: (options: Options = {}) => {
      const validators: Validators = {
        type: { executor: (value: any) => isType(value, "number") },
      };

      const val = options.value;
      if (val != undefined) {
        validators.value = {
          expected: val,
          executor: Array.isArray(val) ? (value: any) => isWithinNumberRange(value, val) : (value: any) => val === value,
        };
      }

      const maximumValue = options.maximumValue;
      if (maximumValue != undefined) {
        validators.maximumValue = {
          expected: maximumValue,
          executor: (value: any) => isWithinNumberRange(value, [undefined, maximumValue]),
        };
      }

      const minimumValue = options.minimumValue;
      if (minimumValue != undefined) {
        validators.minimumValue = {
          expected: minimumValue,
          executor: (value: any) => isWithinNumberRange(value, [minimumValue, undefined]),
        };
      }

      const integer = options.integer;
      if (integer != undefined) {
        validators.integer = { expected: true, executor: isInteger };
      }

      const float = options.float;
      if (float != undefined) {
        validators.float = { expected: true, executor: isDecimal };
      }

      const positive = options.positive;
      if (positive != undefined) {
        validators.positive = { expected: true, executor: isPositiveNumber };
      }

      const negative = options.negative;
      if (negative != undefined) {
        validators.negative = { expected: true, executor: isNegativeNumber };
      }

      const digits = options.digits;
      if (digits != undefined) {
        validators.digits = {
          expected: digits,
          executor: Array.isArray(digits)
            ? (value: any) => isWithinDigitsRange(value, digits)
            : (value: any) => hasDigits(value, digits),
        };
      }

      const maximumDigits = options.maximumDigits;
      if (maximumDigits != undefined) {
        validators.maximumDigits = {
          expected: maximumDigits,
          executor: (value: any) => isWithinDigitsRange(value, [undefined, maximumDigits]),
        };
      }

      const minimumDigits = options.minimumDigits;
      if (minimumDigits != undefined) {
        validators.minimumDigits = {
          expected: minimumDigits,
          executor: (value: any) => isWithinDigitsRange(value, [minimumDigits, undefined]),
        };
      }

      return validators;
    },
  };
};
