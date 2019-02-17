// =============================================================================================================================
// SRC - OPERATORS - NULLARY MESSAGES
// =============================================================================================================================
import { ModifierType } from "@modifiers/index";
import { ErrorMessageCreators, getAdverb } from "./shared";
import { Options as OperatorOptions } from "./nullary-operator";

export const errorMessageCreators: ErrorMessageCreators<OperatorOptions> = {
  type: (subject: string, _: unknown, __: unknown, modifierType?: ModifierType) => {
    const adverb = getAdverb(modifierType);

    return `The ${subject} should ${adverb}be null or undefined.`;
  },
};
