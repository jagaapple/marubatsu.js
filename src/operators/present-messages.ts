// =============================================================================================================================
// SRC - OPERATORS - PRESENT MESSAGES
// =============================================================================================================================
import { ModifierType } from "@modifiers/index";
import { ErrorMessageCreators, getAdverb } from "./shared";
import { Options as OperatorOptions } from "./present";

export const errorMessageCreators: ErrorMessageCreators<OperatorOptions> = {
  type: (subject: string, _: unknown, __: unknown, modifierType?: ModifierType) => {
    const adverb = getAdverb(modifierType);

    return `The ${subject} should ${adverb}be present.`;
  },
};
