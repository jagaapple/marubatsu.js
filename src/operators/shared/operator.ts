// =============================================================================================================================
// SRC - OPERATORS - SHARED - OPERATOR
// =============================================================================================================================
export type ValidationExecutor = ((value: any) => boolean);
export interface Validator {
  type: ValidationExecutor;
  [name: string]: ValidationExecutor;
}
export type Operator = ((...args: any) => Validator);
