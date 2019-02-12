// =============================================================================================================================
// SRC - OPERATORS - BLANK MESSAGES
// =============================================================================================================================
import { ErrorMessageCreators } from "./shared";
import { Options as OperatorOptions } from "./blank-operator";

export const errorMessageCreators: ErrorMessageCreators<OperatorOptions> = {
  blank: (subject: string) => `The ${subject} should be blank.`,
};
