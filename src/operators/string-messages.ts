// =============================================================================================================================
// SRC - OPERATORS - STRING MESSAGES
// =============================================================================================================================
import { ModifierType } from "@modifiers/index";
import { ErrorMessageCreators, getAdverb } from "./shared";
import { AlphanumericOptionCaseType, Options as OperatorOptions } from "./string-operator";

export const errorMessageCreators: ErrorMessageCreators<OperatorOptions> = {
  value: (subject: string, actual: any, expected: string, modifierType?: ModifierType) => {
    const adverb = getAdverb(modifierType);

    return `The ${subject} should ${adverb}be ${expected}, but "${actual}".`;
  },
  length: (subject: string, actual: any, expected: number | [number, number], modifierType?: ModifierType) => {
    const adverb = getAdverb(modifierType);

    if (typeof expected === "number") {
      return `The ${subject} should ${adverb}be ${expected} characters in length, but ${actual}.`;
    }

    const minimumLength = expected[0];
    const maximumLength = expected[1];

    // tslint:disable-next-line:max-line-length
    return `The ${subject} should ${adverb}be between ${minimumLength} and ${maximumLength} characters in length, but ${actual}.`;
  },
  maximumLength: (subject: string, actual: any, expected: number, modifierType?: ModifierType) => {
    const adverb = getAdverb(modifierType);

    return `The ${subject} should ${adverb}be no more than ${expected} characters in length, but ${actual}.`;
  },
  minimumLength: (subject: string, actual: any, expected: number, modifierType?: ModifierType) => {
    const adverb = getAdverb(modifierType);

    return `The ${subject} should ${adverb}be at least ${expected} characters in length, but ${actual}.`;
  },
  startsWith: (subject: string, _: unknown, expected: string, modifierType?: ModifierType) => {
    const adverb = getAdverb(modifierType);

    return `The ${subject} should ${adverb}start with ${expected}.`;
  },
  endsWith: (subject: string, _: unknown, expected: string, modifierType?: ModifierType) => {
    const adverb = getAdverb(modifierType);

    return `The ${subject} should ${adverb}end with ${expected}.`;
  },
  alphanumeric: (subject: string, _: unknown, expected: boolean | AlphanumericOptionCaseType, modifierType?: ModifierType) => {
    const adverb = getAdverb(modifierType);

    if (typeof expected === "boolean") {
      return `The ${subject} should ${adverb}be alphanumeric.`;
    }

    const messages = [`The ${subject} should ${adverb}be alphanumeric and`];
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
  includes: (subject: string, _: unknown, expected: string, modifierType?: ModifierType) => {
    const adverb = getAdverb(modifierType);

    return `The ${subject} should ${adverb}include "${expected}".`;
  },
  pattern: (subject: string, _: unknown, expected: RegExp, modifierType?: ModifierType) => {
    const adverb = getAdverb(modifierType);

    return `The ${subject} should ${adverb}conform the pattern ${expected}.`;
  },
};
