// =============================================================================================================================
// SRC - OPERATORS - NUMBER MESSAGES
// =============================================================================================================================
import { ErrorMessageCreators } from "./shared";
import { Options as OperatorOptions } from "./number-operator";

export const errorMessageCreators: ErrorMessageCreators<OperatorOptions> = {
  value: (subject: string, actual: any, expected: number | [number, number]) => {
    if (typeof expected === "number") return `The ${subject} should be ${expected}, but ${actual}.`;

    const minimumValue = expected[0];
    const maximumValue = expected[1];

    return `The ${subject} should be between ${minimumValue} and ${maximumValue}.`;
  },
  maximumValue: (subject: string, actual: any, expected: number) =>
    `The ${subject} should be no more than ${expected}, but ${actual}.`,
  minimumValue: (subject: string, actual: any, expected: number) =>
    `The ${subject} should be no less than ${expected}, but "${actual}".`,
  integer: (subject: string, actual: any) => `The ${subject} should be an integer number, but ${actual}.`,
  float: (subject: string, actual: any) => `The ${subject} should have decimal, but ${actual}.`,
  positive: (subject: string, actual: any) => `The ${subject} should be a positive number, but ${actual}.`,
  negative: (subject: string, actual: any) => `The ${subject} should be a negative number, but ${actual}.`,
  digits: (subject: string, actual: any, expected: number | [number, number]) => {
    if (typeof expected === "number") return `The ${subject} should be ${expected} number of digits, but ${actual}.`;

    const minimumNumberOfDigits = expected[0];
    const maximumNumberOfDigits = expected[1];

    return [
      `The ${subject} should be`,
      `between ${minimumNumberOfDigits} and ${maximumNumberOfDigits} number of digits,`,
      `but ${actual}.`,
    ].join(" ");
  },
  maximumDigits: (subject: string, actual: any, expected: number) =>
    `The ${subject} should be no more than ${expected} number of digits, but ${actual}.`,
  minimumDigits: (subject: string, actual: any, expected: number) =>
    `The ${subject} should be no less than ${expected} number of digits, but ${actual}.`,
};
