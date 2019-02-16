// =============================================================================================================================
// SRC - OPERATORS - SHARED - ERROR MESSAGE CREATOR
// =============================================================================================================================
import { ModifierType } from "@modifiers/index";

export type ErrorMessageCreator<Expected> = (
  subject: string,
  actual: any,
  expected: Expected,
  modifierType?: ModifierType,
) => string;
export type ErrorMessageCreators<OperatorOptions> = {
  [K in keyof OperatorOptions]-?: ErrorMessageCreator<NonNullable<OperatorOptions[K]>>
};
