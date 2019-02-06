// =============================================================================================================================
// SRC - OPERATORS - PRESENT MESSAGES
// =============================================================================================================================
import { ErrorMessageCreators } from "./shared";
import { Options as OperatorOptions } from "./present-operator";

export const errorMessageCreators: ErrorMessageCreators<OperatorOptions> = {
  present: (subject: string) => `The ${subject} should be present.`,
};
