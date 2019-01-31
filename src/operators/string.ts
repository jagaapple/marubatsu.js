// =============================================================================================================================
// SRC - OPERATORS - STRING
// =============================================================================================================================
import {
  endsWith as checkToEndsWith,
  includes as checkToIncludes,
  isAlphanumeric,
  isCamelCase,
  isConformingRegExp,
  isDotCase,
  isEqualToLength,
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
  isKebabCase,
  isSnakeCase,
  isSpaceCase,
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
    isKebabCase,
    isSnakeCase,
    isSpaceCase,
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
      const validators: Validators = {
        type: { executor: (value: any) => isType(value, "string") },
      };

      const val = options.value;
      if (val != undefined) {
        validators.value = {
          expected: val,
          executor: (value: any) => val === value,
        };
      }

      const length = options.length;
      if (length != undefined) {
        validators.length = {
          expected: length,
          executor: Array.isArray(length)
            ? (value: any) => isWithinLengthRange(value, length)
            : (value: any) => isEqualToLength(value, length),
        };
      }

      const maximumLength = options.maximumLength;
      if (maximumLength != undefined) {
        validators.maximumLength = {
          expected: maximumLength,
          executor: (value: any) => isWithinLengthRange(value, [undefined, maximumLength]),
        };
      }

      const minimumLength = options.minimumLength;
      if (minimumLength != undefined) {
        validators.minimumLength = {
          expected: minimumLength,
          executor: (value: any) => isWithinLengthRange(value, [minimumLength, undefined]),
        };
      }

      const startsWith = options.startsWith;
      if (startsWith != undefined) {
        validators.startsWith = {
          expected: startsWith,
          executor: (value: any) => checkToStartsWith(value, startsWith),
        };
      }

      const endsWith = options.endsWith;
      if (endsWith != undefined) {
        validators.endsWith = {
          expected: endsWith,
          executor: (value: any) => checkToEndsWith(value, endsWith),
        };
      }

      const alphanumeric = options.alphanumeric;
      if (alphanumeric != undefined) {
        if (alphanumeric === true) {
          validators.alphanumeric = {
            expected: true,
            executor: isAlphanumeric,
          };
        } else {
          switch (alphanumeric) {
            case "lower-camel":
            case "upper-camel":
              validators.alphanumeric = {
                expected: alphanumeric,
                executor: (value: any) => isCamelCase(value, alphanumeric === "upper-camel"),
              };

              break;
            case "lower-snake":
            case "upper-snake":
              validators.alphanumeric = {
                expected: alphanumeric,
                executor: (value: any) => isSnakeCase(value, alphanumeric === "upper-snake"),
              };

              break;
            case "lower-kebab":
            case "upper-kebab":
              validators.alphanumeric = {
                expected: alphanumeric,
                executor: (value: any) => isKebabCase(value, alphanumeric === "upper-kebab"),
              };

              break;
            case "lower-space":
            case "upper-space":
              validators.alphanumeric = {
                expected: alphanumeric,
                executor: (value: any) => isSpaceCase(value, alphanumeric === "upper-space"),
              };

              break;
            case "lower-dot":
            case "upper-dot":
              validators.alphanumeric = {
                expected: alphanumeric,
                executor: (value: any) => isDotCase(value, alphanumeric === "upper-dot"),
              };

              break;
            default:
          }
        }
      }

      const includes = options.includes;
      if (includes != undefined) {
        validators.includes = {
          expected: includes,
          executor: (value: any) => checkToIncludes(value, includes),
        };
      }

      const pattern = options.pattern;
      if (pattern != undefined) {
        validators.pattern = {
          expected: pattern,
          executor: (value: any) => isConformingRegExp(value, pattern),
        };
      }

      return validators;
    },
  };
};
