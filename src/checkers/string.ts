// =============================================================================================================================
// SRC - CHECKERS - STRING
// =============================================================================================================================
import { checkAlphanumeric, CheckResult, getType, ValueType } from "./shared";

interface Options {
  alphanumeric:
    | boolean
    | "camel-case"
    | "upper-camel-case"
    | "lower-camel-case"
    | "snake-case"
    | "upper-snake-case"
    | "lower-snake-case"
    | "kebab-case"
    | "upper-kebab-case"
    | "lower-kebab-case"
    | "space-case"
    | "upper-space-case"
    | "lower-space-case"
    | "dot-case"
    | "upper-dot-case"
    | "lower-dot-case";
}

type Result = CheckResult<"string", ValueType | boolean>;
// tslint:disable-next-line:variable-name
export const string = (targetValue: any, options: Options = {}): Result => {
  if (options.alphanumeric) {
    if (options.alphanumeric === true) {
      const isPassed = checkAlphanumeric(targetValue);

      return {
        isPassed: isPassed
      }
    }
  }

  const result: Result = {
    isPassed: false,
    expected:
  }


  const type = getType(targetValue);

  return {
    isPassed: type === "string",
    expected: "string",
    actual: type,
  };
};
