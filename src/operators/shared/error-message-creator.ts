// =============================================================================================================================
// SRC - OPERATORS - SHARED - ERROR MESSAGE CREATOR
// =============================================================================================================================
export type ErrorMessageCreator<Expected> = (subject: string, actual: any, expected: Expected) => string;
export type ErrorMessageCreators<OperatorOptions> = {
  [K in keyof OperatorOptions]-?: ErrorMessageCreator<NonNullable<OperatorOptions[K]>>
};
