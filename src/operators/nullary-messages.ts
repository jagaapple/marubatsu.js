// =============================================================================================================================
// SRC - OPERATORS - NULLARY MESSAGES
// =============================================================================================================================
import { ErrorMessageCreators } from "./shared";
import { Options as OperatorOptions } from "./nullary-operator";

export const errorMessageCreators: ErrorMessageCreators<OperatorOptions> = {
  nullary: (subject: string) => `The ${subject} should be null or undefined.`,
};
