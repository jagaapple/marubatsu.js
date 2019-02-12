// =============================================================================================================================
// SRC - OPERATORS - EMPTY MESSAGES
// =============================================================================================================================
import { ErrorMessageCreators } from "./shared";
import { Options as OperatorOptions } from "./empty-operator";

export const errorMessageCreators: ErrorMessageCreators<OperatorOptions> = {
  empty: (subject: string) => `The ${subject} should be empty.`,
};
