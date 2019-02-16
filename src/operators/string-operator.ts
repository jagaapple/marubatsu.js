// =============================================================================================================================
// SRC - OPERATORS - STRING OPERATOR
// =============================================================================================================================
import {
  endsWith as checkToEndsWith,
  includes as checkToIncludes,
  isAlphanumeric,
  isCamelCase,
  isConformingRegExp,
  isDotCase,
  isEqualToLength,
  isEqualToValue,
  isKebabCase,
  isSnakeCase,
  isSpaceCase,
  isType,
  isWithinLengthRange,
  startsWith as checkToStartsWith,
} from "@checkers/index";
import { Validators } from "./shared";

const deafultCheckers = {
  isAlphanumeric,
  isCamelCase,
  isDotCase,
  isEqualToLength,
  isEqualToValue,
  isKebabCase,
  isSnakeCase,
  isSpaceCase,
  isType,
  isWithinLengthRange,
  checkToStartsWith,
  checkToEndsWith,
  checkToIncludes,
  isConformingRegExp,
};

export type AlphanumericOptionCaseType =
  | "lower-camel"
  | "upper-camel"
  | "lower-snake"
  | "upper-snake"
  | "lower-kebab"
  | "upper-kebab"
  | "lower-space"
  | "upper-space"
  | "lower-dot"
  | "upper-dot";

export interface Options {
  type?: boolean;
  value?: string;
  length?: number | [number, number];
  maximumLength?: number;
  minimumLength?: number;
  startsWith?: string;
  endsWith?: string;
  alphanumeric?: boolean | AlphanumericOptionCaseType;
  includes?: string;
  pattern?: RegExp;
}

type DICheckers = { [K in keyof typeof deafultCheckers]: typeof deafultCheckers[K] };
export const createStringOperator = (checkers: Partial<DICheckers> = {}) => {
  // tslint:disable:no-shadowed-variable
  const {
    isAlphanumeric,
    isCamelCase,
    isDotCase,
    isEqualToLength,
    isEqualToValue,
    isKebabCase,
    isSnakeCase,
    isSpaceCase,
    isType,
    isWithinLengthRange,
    checkToStartsWith,
    checkToEndsWith,
    checkToIncludes,
    isConformingRegExp,
  } = {
    ...deafultCheckers,
    ...checkers,
  };
  // tslint:enable:no-shadowed-variable

  return {
    name: "string",
    createValidators: (options: Options = {}) => {
      const validators: Validators = {};

      const type = options.type;
      if (type) {
        validators.type = (value: any) => isType(value, "string");
      }

      const val = options.value;
      if (val != undefined) {
        validators.value = (value: any) => isEqualToValue(value, val);
      }

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
        validators.startsWith = (value: any) => checkToStartsWith(value, startsWith);
      }

      const endsWith = options.endsWith;
      if (endsWith != undefined) {
        validators.endsWith = (value: any) => checkToEndsWith(value, endsWith);
      }

      const alphanumeric = options.alphanumeric;
      if (alphanumeric != undefined) {
        if (alphanumeric === true) {
          validators.alphanumeric = isAlphanumeric;
        } else {
          switch (alphanumeric) {
            case "lower-camel":
            case "upper-camel":
              validators.alphanumeric = (value: any) => isCamelCase(value, alphanumeric === "upper-camel");

              break;
            case "lower-snake":
            case "upper-snake":
              validators.alphanumeric = (value: any) => isSnakeCase(value, alphanumeric === "upper-snake");

              break;
            case "lower-kebab":
            case "upper-kebab":
              validators.alphanumeric = (value: any) => isKebabCase(value, alphanumeric === "upper-kebab");

              break;
            case "lower-space":
            case "upper-space":
              validators.alphanumeric = (value: any) => isSpaceCase(value, alphanumeric === "upper-space");

              break;
            case "lower-dot":
            case "upper-dot":
              validators.alphanumeric = (value: any) => isDotCase(value, alphanumeric === "upper-dot");

              break;
            default:
          }
        }
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
    },
  };
};
