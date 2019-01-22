// =============================================================================================================================
// SRC - OPERATORS - STRING
// =============================================================================================================================
import {
  endsWith as checkToEndsWith,
  includes as checkToIncludes,
  isConformingRegExp,
  isEqualToLength,
  isType,
  isWithinLengthRange,
  startsWith as checkToStartsWith,
} from "@checkers/index";
import { Validator } from "./shared";

const deafultCheckers = {
  isEqualToLength,
  isWithinLengthRange,
  checkToStartsWith,
  checkToEndsWith,
  checkToIncludes,
  isConformingRegExp,
};

export interface Options {
  length?: number | [number, number];
  maximumLength?: number;
  minimumLength?: number;
  startsWith?: number | string;
  endsWith?: number | string;
  includes?: string;
  pattern?: RegExp;
}

type DICheckers = { [K in keyof typeof deafultCheckers]: typeof deafultCheckers[K] };
export const createStringOperator = (checkers: Partial<DICheckers> = {}) => {
  // tslint:disable:no-shadowed-variable
  const { isEqualToLength, isWithinLengthRange, checkToStartsWith, checkToEndsWith, checkToIncludes, isConformingRegExp } = {
    ...deafultCheckers,
    ...checkers,
  };
  // tslint:enable:no-shadowed-variable

  return (options: Options = {}) => {
    const validators: Validator = {
      type: (value: any) => isType(value, "string"),
    };

    const length = options.length;
    if (length != undefined) {
      validators.length = Array.isArray(length)
        ? (value: any) => isWithinLengthRange(value, length)
        : (value: any) => isEqualToLength(value, length);
    }

    const maximumLength = options.maximumLength;
    if (maximumLength != undefined) {
      validators.maximumLength = (value: any) => isWithinLengthRange(value, [undefined, maximumLength]);
    }

    const minimumLength = options.minimumLength;
    if (minimumLength != undefined) {
      validators.minimumLength = (value: any) => isWithinLengthRange(value, [minimumLength, undefined]);
    }

    const startsWith = options.startsWith;
    if (startsWith != undefined) {
      validators.startsWith = (value: any) => checkToStartsWith(value, startsWith.toString());
    }

    const endsWith = options.endsWith;
    if (endsWith != undefined) {
      validators.endsWith = (value: any) => checkToEndsWith(value, endsWith.toString());
    }

    const includes = options.includes;
    if (includes != undefined) {
      validators.includes = (value: any) => checkToIncludes(value, includes);
    }

    const pattern = options.pattern;
    if (pattern != undefined) {
      validators.pattern = (value: any) => isConformingRegExp(value, pattern);
    }

    return validators;
  };
};
