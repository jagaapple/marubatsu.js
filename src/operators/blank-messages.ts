// =============================================================================================================================
// SRC - OPERATORS - BLANK MESSAGES
// =============================================================================================================================
import { ModifierType } from "@modifiers/index";
import { ErrorMessageCreators, getAdverb } from "./shared";
import { Options as OperatorOptions } from "./blank-operator";

export const errorMessageCreators: ErrorMessageCreators<OperatorOptions> = {
  blank: (subject: string, _: unknown, __: unknown, modifierType?: ModifierType) => {
    const adverb = getAdverb(modifierType);

    return `The ${subject} should ${adverb}be blank.`;
  },
};
