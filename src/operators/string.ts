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

export interface StringOptions {
  length?: number | [number, number];
  startsWith?: number | string;
  endsWith?: number | string;
  includes?: string;
  pattern?: RegExp;
}

// tslint:disable-next-line:variable-name
export const string = (options: StringOptions = {}) => {
  const validators: Validator = {
    type: (value: any) => isType(value, "string"),
  };

  const length = options.length;
  if (length != undefined) {
    validators.length = Array.isArray(length)
      ? (value: any) => isWithinLengthRange(value, length)
      : (value: any) => isEqualToLength(value, length);
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
