// =============================================================================================================================
// SRC - OPERATORS - NUMBER OPERATOR
// =============================================================================================================================
import {
  hasDigits,
  isDecimal,
  isEqualToValue,
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
  isEqualToValue,
  isInteger,
  isNegativeNumber,
  isPositiveNumber,
  isType,
  isWithinDigitsRange,
  isWithinNumberRange,
};

export interface Options {
  type?: boolean;
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
    isEqualToValue,
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
      const validators: Validators = {};

      const type = options.type;
      if (type) {
        validators.type = (value: any) => isType(value, "number");
      }

      const val = options.value;
      if (val != undefined) {
        validators.value = Array.isArray(val)
          ? (value: any) => isWithinNumberRange(value, val)
          : (value: any) => isEqualToValue(value, val);
      }

      const maximumValue = options.maximumValue;
      if (maximumValue != undefined) {
        validators.maximumValue = (value: any) => isWithinNumberRange(value, [undefined, maximumValue]);
      }

      const minimumValue = options.minimumValue;
      if (minimumValue != undefined) {
        validators.minimumValue = (value: any) => isWithinNumberRange(value, [minimumValue, undefined]);
      }

      const integer = options.integer;
      if (integer != undefined) {
        validators.integer = isInteger;
      }

      const float = options.float;
      if (float != undefined) {
        validators.float = isDecimal;
      }

      const positive = options.positive;
      if (positive != undefined) {
        validators.positive = isPositiveNumber;
      }

      const negative = options.negative;
      if (negative != undefined) {
        validators.negative = isNegativeNumber;
      }

      const digits = options.digits;
      if (digits != undefined) {
        validators.digits = Array.isArray(digits)
          ? (value: any) => isWithinDigitsRange(value, digits)
          : (value: any) => hasDigits(value, digits);
      }

      const maximumDigits = options.maximumDigits;
      if (maximumDigits != undefined) {
        validators.maximumDigits = (value: any) => isWithinDigitsRange(value, [undefined, maximumDigits]);
      }

      const minimumDigits = options.minimumDigits;
      if (minimumDigits != undefined) {
        validators.minimumDigits = (value: any) => isWithinDigitsRange(value, [minimumDigits, undefined]);
      }

      return validators;
    },
  };
};
