// =============================================================================================================================
// SRC - OPERATORS - NUMBER MESSAGES
// =============================================================================================================================
import { ModifierType } from "@modifiers/index";
import { ErrorMessageCreators, getAdverb } from "./shared";
import { Options as OperatorOptions } from "./number-operator";

export const errorMessageCreators: ErrorMessageCreators<OperatorOptions> = {
  type: (subject: string, actual: any, _: unknown, modifierType?: ModifierType) => {
    const adverb = getAdverb(modifierType);

    return `The ${subject} should ${adverb}be number, but "${actual}".`;
  },
  value: (subject: string, actual: any, expected: number | [number, number], modifierType?: ModifierType) => {
    const adverb = getAdverb(modifierType);

    if (typeof expected === "number") return `The ${subject} should ${adverb}be ${expected}, but ${actual}.`;

    const minimumValue = expected[0];
    const maximumValue = expected[1];

    return `The ${subject} should ${adverb}be between ${minimumValue} and ${maximumValue}.`;
  },
  maximumValue: (subject: string, actual: any, expected: number, modifierType?: ModifierType) => {
    const adverb = getAdverb(modifierType);

    return `The ${subject} should ${adverb}be no more than ${expected}, but ${actual}.`;
  },
  minimumValue: (subject: string, actual: any, expected: number, modifierType?: ModifierType) => {
    const adverb = getAdverb(modifierType);

    return `The ${subject} should ${adverb}be no less than ${expected}, but "${actual}".`;
  },
  integer: (subject: string, actual: any, _: unknown, modifierType?: ModifierType) => {
    const adverb = getAdverb(modifierType);

    return `The ${subject} should ${adverb}be an integer number, but ${actual}.`;
  },
  float: (subject: string, actual: any, _: unknown, modifierType?: ModifierType) => {
    const adverb = getAdverb(modifierType);

    return `The ${subject} should ${adverb}have decimal, but ${actual}.`;
  },
  positive: (subject: string, actual: any, _: unknown, modifierType?: ModifierType) => {
    const adverb = getAdverb(modifierType);

    return `The ${subject} should ${adverb}be a positive number, but ${actual}.`;
  },
  negative: (subject: string, actual: any, _: unknown, modifierType?: ModifierType) => {
    const adverb = getAdverb(modifierType);

    return `The ${subject} should ${adverb}be a negative number, but ${actual}.`;
  },
  digits: (subject: string, actual: any, expected: number | [number, number], modifierType?: ModifierType) => {
    const adverb = getAdverb(modifierType);

    if (typeof expected === "number") {
      return `The ${subject} should ${adverb}be ${expected} number of digits, but ${actual}.`;
    }

    const minimumNumberOfDigits = expected[0];
    const maximumNumberOfDigits = expected[1];

    return [
      `The ${subject} should ${adverb}be`,
      `between ${minimumNumberOfDigits} and ${maximumNumberOfDigits} number of digits,`,
      `but ${actual}.`,
    ].join(" ");
  },
  maximumDigits: (subject: string, actual: any, expected: number, modifierType?: ModifierType) => {
    const adverb = getAdverb(modifierType);

    return `The ${subject} should ${adverb}be no more than ${expected} number of digits, but ${actual}.`;
  },
  minimumDigits: (subject: string, actual: any, expected: number, modifierType?: ModifierType) => {
    const adverb = getAdverb(modifierType);

    return `The ${subject} should ${adverb}be no less than ${expected} number of digits, but ${actual}.`;
  },
};
