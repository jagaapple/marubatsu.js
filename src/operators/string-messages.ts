// =============================================================================================================================
// SRC - OPERATORS - STRING MESSAGES
// =============================================================================================================================
import { ErrorMessageCreators } from "./shared";
import { AlphanumericOptionCaseType, Options as OperatorOptions } from "./string-operator";

export const errorMessageCreators: ErrorMessageCreators<OperatorOptions> = {
  value: (subject: string, actual: any, expected: string) => `The ${subject} should be ${expected}, but "${actual}".`,
  length: (subject: string, actual: any, expected: number | [number, number]) => {
    if (typeof expected === "number") return `The ${subject} should be ${expected} characters in length, but ${actual}.`;

    const maximumLength = expected[0];
    const minimumLength = expected[1];

    return `The ${subject} should be between ${minimumLength} and ${maximumLength} characters in length, but ${actual}.`;
  },
  maximumLength: (subject: string, actual: any, expected: number) =>
    `The ${subject} should be no more than ${expected} characters in length, but ${actual}.`,
  minimumLength: (subject: string, actual: any, expected: number) =>
    `The ${subject} should be at least ${expected} characters in length, but ${actual}.`,
  startsWith: (subject: string, _: unknown, expected: string) => `The ${subject} should start with ${expected}.`,
  endsWith: (subject: string, _: unknown, expected: string) => `The ${subject} should end with ${expected}.`,
  alphanumeric: (subject: string, _: unknown, expected: boolean | AlphanumericOptionCaseType) => {
    if (typeof expected === "boolean") return `The ${subject} should be alphanumeric.`;

    const messages = [`The ${subject} should be alphanumeric and`];
    switch (expected) {
      case "lower-camel":
        messages.push("follow lowerCamelCase style");

        break;
      case "upper-camel":
        messages.push("follow UpperCamelCase style");

        break;
      case "lower-snake":
        messages.push("follow lower_snake_case style");

        break;
      case "upper-snake":
        messages.push("follow Upper_Snake_Case style");

        break;
      case "lower-kebab":
        messages.push("follow lower-kebab-case style");

        break;
      case "upper-kebab":
        messages.push("follow Upper-Kebab-Case (Upper-Chain-Case) style");

        break;
      case "lower-space":
        messages.push('follow "lower space case" style');

        break;
      case "upper-space":
        messages.push('follow "Upper Space Case" style');

        break;
      case "lower-dot":
        messages.push("follow lower.dot.case style");

        break;
      case "upper-dot":
        messages.push("follow Upper.Dot.Case style");

        break;
      default:
        return "";
    }

    return messages.join(" ") + ".";
  },
  includes: (subject: string, _: unknown, expected: string) => `The ${subject} should include "${expected}".`,
  pattern: (subject: string, _: unknown, expected: RegExp) => `The ${subject} should conform the pattern ${expected}.`,
};
